import { useEffect, useState } from "react";
import {
  Activity,
  BarChart3,
  Clock,
  Download,
  Eye,
  Lock,
  Monitor,
  RefreshCw,
  Users,
  X,
} from "lucide-react";
import { isAnalyticsConfigured, loadAdminStats } from "../lib/portfolioAnalytics";

interface AdminPanelProps {
  open: boolean;
  onClose: () => void;
}

interface AdminEvent {
  id: string;
  occurred_at: string;
  project_id?: string;
  event_type: string;
  device_type?: string;
  browser?: string;
}

interface AdminStats {
  todayVisits: number;
  totalVisits: number;
  uniqueVisitors: number;
  activeVisitors: number;
  cvDownloads: number;
  projectClicks?: Record<string, number>;
  recentEvents?: AdminEvent[];
  hourly?: { label: string; count: number }[];
}

function formatAdminTime(value: string) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      timeZone: "Europe/Istanbul",
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default function AdminPanel({ open, onClose }: AdminPanelProps) {
  const [password, setPassword] = useState("");
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const configured = isAnalyticsConfigured();

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("overflow-hidden");
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const fetchStats = async (event?: React.FormEvent) => {
    event?.preventDefault();

    if (!configured) {
      setError("Analytics endpoint ayarı eksik. VITE_STATS_ENDPOINT eklenince panel çalışır.");
      return;
    }

    if (!password.trim()) {
      setError("Admin şifresi gerekli.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      setStats((await loadAdminStats(password)) as AdminStats);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "İstek başarısız oldu.");
    } finally {
      setLoading(false);
    }
  };

  const statCards: [string, number, typeof Eye][] = stats
    ? [
        ["Bugün", stats.todayVisits, Eye],
        ["Toplam ziyaret", stats.totalVisits, BarChart3],
        ["Tekil ziyaretçi", stats.uniqueVisitors, Users],
        ["Son 10dk aktif", stats.activeVisitors, Activity],
        ["CV indirme", stats.cvDownloads, Download],
      ]
    : [];
  const projectClicks = Object.entries(stats?.projectClicks || {}).sort((a, b) => b[1] - a[1]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0C0C0C] border border-[#D7E2EA]/20 p-6 sm:p-8 text-[#D7E2EA]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute right-5 top-5 text-[#D7E2EA]/70 hover:text-[#D7E2EA]"
          onClick={onClose}
          type="button"
          aria-label="Close admin"
        >
          <X size={20} />
        </button>

        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60">
              <Lock size={16} />
              Admin
            </span>
            <h3 className="text-xl font-medium mt-1">Ziyaret paneli</h3>
            <p className="text-sm text-[#D7E2EA]/60 mt-1">
              Shift + A ile açılır. Veriler Supabase backend bağlantısı aktifse dolar.
            </p>
          </div>
          {stats && (
            <button
              className="inline-flex items-center gap-2 text-sm border border-[#D7E2EA]/30 rounded-full px-4 py-2 hover:bg-[#D7E2EA]/10"
              disabled={loading}
              onClick={() => fetchStats()}
              type="button"
            >
              <RefreshCw size={16} />
              Yenile
            </button>
          )}
        </div>

        {!stats ? (
          <form className="flex flex-col gap-4" onSubmit={fetchStats}>
            <label className="flex flex-col gap-2 text-sm">
              Admin şifresi
              <input
                autoFocus
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="******"
                className="rounded-xl bg-white/5 border border-[#D7E2EA]/20 px-4 py-3 text-[#D7E2EA] outline-none focus:border-[#D7E2EA]/50"
              />
            </label>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <button
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-medium px-6 py-3"
              disabled={loading}
              type="submit"
            >
              <Lock size={17} />
              {loading ? "..." : "Paneli aç"}
            </button>
          </form>
        ) : (
          <div aria-busy={loading} className="flex flex-col gap-6">
            {error && <p className="text-sm text-red-400">{error}</p>}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {statCards.map(([label, value, Icon]) => (
                <article
                  key={label}
                  className="flex flex-col gap-2 rounded-2xl border border-[#D7E2EA]/15 p-4"
                >
                  <Icon size={19} />
                  <strong className="text-2xl font-semibold">{value ?? 0}</strong>
                  <span className="text-xs text-[#D7E2EA]/60">{label}</span>
                </article>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <section>
                <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#D7E2EA]/60 mb-3">
                  <Clock size={17} />
                  Son hareketler
                </h4>
                <div className="flex flex-col gap-2">
                  {(stats.recentEvents || []).length ? (
                    stats.recentEvents!.map((event) => (
                      <div key={event.id} className="flex items-center justify-between text-sm border-b border-[#D7E2EA]/10 pb-2">
                        <span className="text-[#D7E2EA]/60">{formatAdminTime(event.occurred_at)}</span>
                        <strong>{event.project_id || event.event_type}</strong>
                        <small className="text-[#D7E2EA]/50">
                          {event.device_type || "device"} / {event.browser || "browser"}
                        </small>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#D7E2EA]/50">Henüz veri yok.</p>
                  )}
                </div>
              </section>

              <section>
                <h4 className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#D7E2EA]/60 mb-3">
                  <Monitor size={17} />
                  Proje tıklamaları
                </h4>
                <div className="flex flex-col gap-2">
                  {projectClicks.length ? (
                    projectClicks.map(([projectId, count]) => (
                      <div key={projectId} className="flex items-center justify-between text-sm">
                        <span>{projectId}</span>
                        <strong>{count}</strong>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[#D7E2EA]/50">Henüz veri yok.</p>
                  )}
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
