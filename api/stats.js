const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
};

const allowedEventTypes = new Set(["visit", "project_click", "external_click", "video_open"]);

function sendJson(response, status, body, request) {
  const origin = request.headers.origin || "*";
  const allowedOrigin = process.env.ALLOWED_ORIGIN || origin;

  if (typeof response.status === "function") {
    response.status(status);
  } else {
    response.statusCode = status;
  }

  response.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  Object.entries(jsonHeaders).forEach(([key, value]) => response.setHeader(key, value));
  response.end(JSON.stringify(body));
}

function readJsonBody(request) {
  if (!request.body) {
    return {};
  }

  if (typeof request.body === "string") {
    return JSON.parse(request.body.replace(/^\uFEFF/, ""));
  }

  if (request.body instanceof Buffer) {
    return JSON.parse(request.body.toString("utf8").replace(/^\uFEFF/, ""));
  }

  return request.body;
}

function getRequiredEnv() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const eventsTable = process.env.SUPABASE_EVENTS_TABLE || "portfolio_visitor_events";

  if (!supabaseUrl || !serviceRoleKey || !adminPassword) {
    return { error: "Missing SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY or ADMIN_PASSWORD" };
  }

  return {
    supabaseUrl: supabaseUrl.replace(/\/$/, ""),
    serviceRoleKey,
    adminPassword,
    eventsTable,
  };
}

function normalizeText(value, maxLength = 500) {
  if (typeof value !== "string") {
    return "";
  }

  return value.slice(0, maxLength);
}

function toInt(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(number) : null;
}

function normalizeEvent(event, request) {
  const type = normalizeText(event.type, 40);

  if (!allowedEventTypes.has(type)) {
    throw new Error("Invalid analytics event type");
  }

  if (!event.visitorId) {
    throw new Error("visitorId is required");
  }

  return {
    event_type: type,
    visitor_id: normalizeText(event.visitorId, 120),
    session_id: normalizeText(event.sessionId, 120),
    project_id: normalizeText(event.projectId, 120),
    label: normalizeText(event.label, 180),
    path: normalizeText(event.path, 500),
    referrer: normalizeText(event.referrer, 500),
    language: normalizeText(event.language, 40),
    timezone: normalizeText(event.timezone, 80),
    user_agent: normalizeText(event.userAgent, 500),
    device_type: normalizeText(event.deviceType, 40),
    browser: normalizeText(event.browser, 80),
    os: normalizeText(event.os, 80),
    screen_width: toInt(event.screenWidth),
    screen_height: toInt(event.screenHeight),
    viewport_width: toInt(event.viewportWidth),
    viewport_height: toInt(event.viewportHeight),
    country: normalizeText(request.headers["x-vercel-ip-country"] || "", 8),
    occurred_at: event.occurredAt || new Date().toISOString(),
  };
}

async function supabaseRequest(env, path, options = {}) {
  const response = await fetch(`${env.supabaseUrl}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: env.serviceRoleKey,
      Authorization: `Bearer ${env.serviceRoleKey}`,
      ...options.headers,
    },
  });

  const text = await response.text();
  const body = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(body?.message || body?.error || "Supabase request failed");
  }

  return { body, headers: response.headers };
}

async function countRows(env, query = "") {
  const { headers } = await supabaseRequest(env, `${env.eventsTable}?select=id${query}`, {
    method: "GET",
    headers: {
      Prefer: "count=exact",
      Range: "0-0",
    },
  });

  const contentRange = headers.get("content-range") || "0-0/0";
  return Number(contentRange.split("/")[1] || 0);
}

function startOfIstanbulDay() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return new Date(`${year}-${month}-${day}T00:00:00+03:00`).toISOString();
}

function summarizeRecentEvents(recentEvents, uniqueRows, totalVisits, todayVisits, cvDownloads) {
  const now = Date.now();
  const activeSince = now - 10 * 60 * 1000;
  const activeVisitors = new Set();
  const projectClicks = {};
  const hourly = {};

  recentEvents.forEach((event) => {
    const occurredAt = new Date(event.occurred_at);
    const time = occurredAt.getTime();

    if (event.event_type === "visit" && time >= activeSince) {
      activeVisitors.add(event.visitor_id);
    }

    if (event.event_type !== "visit" && event.project_id) {
      projectClicks[event.project_id] = (projectClicks[event.project_id] || 0) + 1;
    }

    const hour = new Intl.DateTimeFormat("tr-TR", {
      timeZone: "Europe/Istanbul",
      hour: "2-digit",
      day: "2-digit",
      month: "2-digit",
    }).format(occurredAt);
    hourly[hour] = (hourly[hour] || 0) + 1;
  });

  return {
    totalVisits,
    todayVisits,
    cvDownloads,
    uniqueVisitors: new Set(uniqueRows.map((row) => row.visitor_id)).size,
    activeVisitors: activeVisitors.size,
    projectClicks,
    hourly: Object.entries(hourly).map(([label, count]) => ({ label, count })),
    recentEvents: recentEvents.slice(0, 60),
    updatedAt: new Date().toISOString(),
  };
}

async function track(env, event, request) {
  const row = normalizeEvent(event || {}, request);

  await supabaseRequest(env, env.eventsTable, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });

  return { ok: true };
}

async function admin(env, password) {
  if (password !== env.adminPassword) {
    const error = new Error("Invalid admin password");
    error.status = 401;
    throw error;
  }

  const todayStart = startOfIstanbulDay();
  const totalVisits = await countRows(env, "&event_type=eq.visit");
  const todayVisits = await countRows(env, `&event_type=eq.visit&occurred_at=gte.${encodeURIComponent(todayStart)}`);
  const cvDownloads = await countRows(env, "&event_type=eq.external_click&project_id=eq.cv-download");

  const recent = await supabaseRequest(
    env,
    `${env.eventsTable}?select=*&order=occurred_at.desc&limit=500`,
    { method: "GET" },
  );
  const unique = await supabaseRequest(
    env,
    `${env.eventsTable}?select=visitor_id&event_type=eq.visit&limit=5000`,
    { method: "GET" },
  );

  return summarizeRecentEvents(recent.body || [], unique.body || [], totalVisits, todayVisits, cvDownloads);
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    return sendJson(response, 200, {}, request);
  }

  if (request.method !== "POST") {
    return sendJson(response, 405, { error: "Method not allowed" }, request);
  }

  const env = getRequiredEnv();

  if (env.error) {
    return sendJson(response, 500, { error: env.error }, request);
  }

  try {
    const { action, event, password } = readJsonBody(request);

    if (action === "track") {
      return sendJson(response, 200, await track(env, event, request), request);
    }

    if (action === "admin") {
      return sendJson(response, 200, await admin(env, password), request);
    }

    return sendJson(response, 400, { error: "Unknown action" }, request);
  } catch (error) {
    return sendJson(response, error.status || 400, { error: error.message }, request);
  }
}
