function getStatsEndpoint() {
  const runtimeEndpoint =
    typeof window !== "undefined" && typeof window.PORTFOLIO_STATS_ENDPOINT === "string"
      ? window.PORTFOLIO_STATS_ENDPOINT
      : "";
  const endpointFromBase = import.meta.env.VITE_STATS_API_BASE
    ? `${import.meta.env.VITE_STATS_API_BASE.replace(/\/$/, "")}/api/stats`
    : "";

  return runtimeEndpoint || import.meta.env.VITE_STATS_ENDPOINT || endpointFromBase;
}

function createId(prefix) {
  const cryptoId =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  return `${prefix}_${cryptoId}`;
}

function storageGet(storage, key) {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function storageSet(storage, key, value) {
  try {
    storage.setItem(key, value);
  } catch {
    // Analytics should never block the portfolio.
  }
}

function getVisitorId() {
  const key = "portfolioVisitorId";
  const existing = storageGet(window.localStorage, key);

  if (existing) {
    return existing;
  }

  const next = createId("visitor");
  storageSet(window.localStorage, key, next);
  return next;
}

function getSessionId() {
  const key = "portfolioSessionId";
  const existing = storageGet(window.sessionStorage, key);

  if (existing) {
    return existing;
  }

  const next = createId("session");
  storageSet(window.sessionStorage, key, next);
  return next;
}

function getDeviceType() {
  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();

  if (/tablet|ipad/.test(userAgent)) {
    return "tablet";
  }

  if (/mobi|android|iphone|ipod/.test(userAgent) || width < 720) {
    return "mobile";
  }

  return "desktop";
}

function getBrowser() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Edg/")) return "Edge";
  if (userAgent.includes("OPR/")) return "Opera";
  if (userAgent.includes("Chrome/")) return "Chrome";
  if (userAgent.includes("Firefox/")) return "Firefox";
  if (userAgent.includes("Safari/")) return "Safari";
  return "Unknown";
}

function getOs() {
  const platform = navigator.userAgent;

  if (/Windows/i.test(platform)) return "Windows";
  if (/Android/i.test(platform)) return "Android";
  if (/iPhone|iPad|iPod/i.test(platform)) return "iOS";
  if (/Mac OS/i.test(platform)) return "macOS";
  if (/Linux/i.test(platform)) return "Linux";
  return "Unknown";
}

function collectClientContext() {
  return {
    visitorId: getVisitorId(),
    sessionId: getSessionId(),
    path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
    referrer: document.referrer || "",
    language: navigator.language || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    userAgent: navigator.userAgent || "",
    deviceType: getDeviceType(),
    browser: getBrowser(),
    os: getOs(),
    screenWidth: window.screen?.width || null,
    screenHeight: window.screen?.height || null,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    occurredAt: new Date().toISOString(),
  };
}

async function sendStats(action, payload = {}) {
  const statsEndpoint = getStatsEndpoint();

  if (!statsEndpoint) {
    return { ok: false, skipped: true };
  }

  const response = await fetch(statsEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action, ...payload }),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(body.error || "Stats request failed");
  }

  return body;
}

export function isAnalyticsConfigured() {
  return Boolean(getStatsEndpoint());
}

export function recordVisit() {
  return sendStats("track", {
    event: {
      ...collectClientContext(),
      type: "visit",
    },
  }).catch(() => null);
}

export function recordPortfolioEvent(type, details = {}) {
  return sendStats("track", {
    event: {
      ...collectClientContext(),
      type,
      ...details,
    },
  }).catch(() => null);
}

export function loadAdminStats(password) {
  return sendStats("admin", { password });
}
