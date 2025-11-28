const http = require('http');
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, 'stats-data.json');
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2'
};

function loadData() {
    try {
        const raw = fs.readFileSync(DATA_PATH, 'utf8');
        const data = JSON.parse(raw);
        data.uniqueVisitorsSet = new Set(data.uniqueVisitorsSet || []);
        data.votesByVisitor = data.votesByVisitor || {};
        data.gameVotes = data.gameVotes || {};
        data.gameClicks = data.gameClicks || {};
        return data;
    } catch (err) {
        return {
            totalVisits: 0,
            todayVisits: 0,
            todayDate: null,
            gameClicks: {},
            gameVotes: {},
            votesByVisitor: {},
            uniqueVisitorsSet: new Set()
        };
    }
}

function saveData(data) {
    const toSave = {
        ...data,
        uniqueVisitorsSet: Array.from(data.uniqueVisitorsSet),
        votesByVisitor: data.votesByVisitor || {},
        gameVotes: data.gameVotes || {}
    };
    fs.writeFileSync(DATA_PATH, JSON.stringify(toSave, null, 2), 'utf8');
}

let store = loadData();

function todayIso() {
    return new Date().toISOString().slice(0, 10);
}

function ensureToday() {
    const today = todayIso();
    if (store.todayDate !== today) {
        store.todayDate = today;
        store.todayVisits = 0;
    }
}

function summary() {
    ensureToday();
    return {
        totalVisits: store.totalVisits || 0,
        uniqueVisitors: store.uniqueVisitorsSet.size || 0,
        todayVisits: store.todayVisits || 0,
        gameClicks: store.gameClicks || {},
        gameVotes: mapVotes(store.gameVotes)
    };
}

function mapVotes(gameVotes) {
    const result = {};
    Object.entries(gameVotes || {}).forEach(([gameId, votes]) => {
        result[gameId] = {
            likes: votes.likes || 0,
            dislikes: votes.dislikes || 0
        };
    });
    return result;
}

function sendJson(res, status, body) {
    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Cache-Control': 'no-store'
    });
    res.end(JSON.stringify(body));
}

function serveStatic(pathname, res) {
    let requestedPath = decodeURIComponent(pathname);
    if (requestedPath === '/') requestedPath = '/index.html';

    const safePath = path.normalize(requestedPath)
        .replace(/^(\.\.[/\\])+/, '')
        .replace(/^[/\\]+/, '');
    const filePath = path.join(PUBLIC_DIR, safePath);

    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Forbidden');
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            return res.end('Not found');
        }

        const ext = path.extname(filePath).toLowerCase();
        const type = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, {
            'Content-Type': type,
            'Cache-Control': 'public, max-age=3600'
        });
        fs.createReadStream(filePath).pipe(res);
    });
}

function handleVisit(payload) {
    ensureToday();
    const visitorId = payload.visitorId || randomUUID();
    if (!store.uniqueVisitorsSet.has(visitorId)) {
        store.uniqueVisitorsSet.add(visitorId);
    }
    store.totalVisits = (store.totalVisits || 0) + 1;
    store.todayVisits = (store.todayVisits || 0) + 1;
    saveData(store);
    return { visitorId, stats: summary(), visitorVotes: store.votesByVisitor[visitorId] || {} };
}

function handleClick(payload) {
    ensureToday();
    const visitorId = payload.visitorId || randomUUID();
    const gameId = payload.gameId;
    if (!gameId) return { error: 'gameId required' };
    if (!store.uniqueVisitorsSet.has(visitorId)) {
        store.uniqueVisitorsSet.add(visitorId);
    }
    store.gameClicks = store.gameClicks || {};
    store.gameClicks[gameId] = (store.gameClicks[gameId] || 0) + 1;
    saveData(store);
    return { visitorId, stats: summary(), visitorVotes: store.votesByVisitor[visitorId] || {} };
}

function handleVote(payload) {
    ensureToday();
    const visitorId = payload.visitorId || randomUUID();
    const gameId = payload.gameId;
    const value = payload.value;
    if (!gameId) return { error: 'gameId required' };
    if (value !== 'like' && value !== 'dislike') return { error: 'value must be like or dislike' };

    if (!store.uniqueVisitorsSet.has(visitorId)) {
        store.uniqueVisitorsSet.add(visitorId);
    }

    store.gameVotes = store.gameVotes || {};
    store.votesByVisitor = store.votesByVisitor || {};
    const gameVote = store.gameVotes[gameId] || { likes: 0, dislikes: 0 };
    const visitorVotes = store.votesByVisitor[visitorId] || {};
    const previous = visitorVotes[gameId];

    if (previous && previous !== value) {
        if (previous === 'like' && gameVote.likes > 0) gameVote.likes -= 1;
        if (previous === 'dislike' && gameVote.dislikes > 0) gameVote.dislikes -= 1;
    }

    if (previous !== value) {
        if (value === 'like') gameVote.likes += 1;
        else gameVote.dislikes += 1;
        visitorVotes[gameId] = value;
        store.votesByVisitor[visitorId] = visitorVotes;
        store.gameVotes[gameId] = gameVote;
        saveData(store);
    }

    return { visitorId, stats: summary(), visitorVotes: store.votesByVisitor[visitorId] || {} };
}

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const { pathname } = urlObj;

    if (req.method === 'OPTIONS') return sendJson(res, 200, {});

    if (pathname === '/api/stats' && req.method === 'GET') {
        return sendJson(res, 200, { stats: summary() });
    }

    if ((pathname === '/api/visit' || pathname === '/api/click' || pathname === '/api/vote') && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            let payload = {};
            try { payload = body ? JSON.parse(body) : {}; } catch (err) { return sendJson(res, 400, { error: 'Invalid JSON' }); }
            let result = {};
            if (pathname === '/api/visit') result = handleVisit(payload);
            else if (pathname === '/api/click') result = handleClick(payload);
            else result = handleVote(payload);
            if (result.error) return sendJson(res, 400, result);
            return sendJson(res, 200, result);
        });
        return;
    }

    if (req.method === 'GET') {
        return serveStatic(pathname, res);
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
});

server.listen(PORT, () => {
    console.log(`Stats server running on http://localhost:${PORT}`);
});
