const http = require('http');
const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

const PORT = process.env.PORT || 3000;
const DATA_PATH = path.join(__dirname, 'stats-data.json');

function loadData() {
    try {
        const raw = fs.readFileSync(DATA_PATH, 'utf8');
        const data = JSON.parse(raw);
        data.uniqueVisitorsSet = new Set(data.uniqueVisitorsSet || []);
        data.gameClicks = data.gameClicks || {};
        return data;
    } catch (err) {
        return { totalVisits: 0, todayVisits: 0, todayDate: null, gameClicks: {}, uniqueVisitorsSet: new Set() };
    }
}

function saveData(data) {
    const toSave = { ...data, uniqueVisitorsSet: Array.from(data.uniqueVisitorsSet) };
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
        gameClicks: store.gameClicks || {}
    };
}

function send(res, status, body) {
    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS'
    });
    res.end(JSON.stringify(body));
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
    return { visitorId, stats: summary() };
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
    return { visitorId, stats: summary() };
}

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') return send(res, 200, {});

    if (req.url === '/api/stats' && req.method === 'GET') {
        return send(res, 200, { stats: summary() });
    }

    if ((req.url === '/api/visit' || req.url === '/api/click') && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            let payload = {};
            try { payload = body ? JSON.parse(body) : {}; } catch (err) { return send(res, 400, { error: 'Invalid JSON' }); }
            const result = req.url === '/api/visit' ? handleVisit(payload) : handleClick(payload);
            if (result.error) return send(res, 400, result);
            return send(res, 200, result);
        });
        return;
    }

    send(res, 404, { error: 'Not found' });
});

server.listen(PORT, () => {
    console.log(`Stats server running on http://localhost:${PORT}`);
});
