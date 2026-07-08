import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api.js";
import { auth } from "../lib/auth.js";

const TABS = [
  { key: "reservations", label: "Reservations" },
  { key: "contacts", label: "Messages" },
  { key: "subscribers", label: "Subscribers" },
];

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("reservations");
  const [data, setData] = useState({ reservations: [], contacts: [], subscribers: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const logout = () => {
    auth.clearToken();
    navigate("/admin/login", { replace: true });
  };

  useEffect(() => {
    const token = auth.getToken();
    let active = true;

    (async () => {
      setLoading(true);
      setError("");
      try {
        const [reservations, contacts, subscribers] = await Promise.all([
          api.getReservations(token),
          api.getContacts(token),
          api.getSubscribers(token),
        ]);
        if (active) setData({ reservations, contacts, subscribers });
      } catch (err) {
        if (!active) return;
        // An expired/invalid token should bounce the admin back to login.
        if (/401|unauthor/i.test(err.message)) {
          logout();
          return;
        }
        setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-sage/30">
      <header className="border-b border-forest/10 bg-cream">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-serif text-xl font-bold text-forest">
              Verde Admin
            </span>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-full border border-forest/30 px-4 py-2 text-sm font-semibold text-forest hover:bg-sage"
          >
            Sign out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex flex-wrap gap-3">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                tab === t.key
                  ? "bg-forest text-cream shadow"
                  : "bg-white text-forest hover:bg-forest/10"
              }`}
            >
              {t.label}
              <span className="ml-2 text-xs opacity-70">
                {data[t.key].length}
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-moss">Loading…</p>
        ) : error ? (
          <p className="rounded-lg bg-clay/10 px-4 py-3 text-sm text-clay">
            {error}
          </p>
        ) : (
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/5">
            {tab === "reservations" && (
              <Table
                headers={["Name", "Email", "Date", "Time", "Guests", "Status"]}
                rows={data.reservations.map((r) => [
                  r.name,
                  r.email,
                  r.date,
                  r.time,
                  r.guests,
                  r.status,
                ])}
                emptyLabel="No reservations yet."
              />
            )}
            {tab === "contacts" && (
              <Table
                headers={["Name", "Email", "Message"]}
                rows={data.contacts.map((c) => [c.name, c.email, c.message])}
                emptyLabel="No messages yet."
              />
            )}
            {tab === "subscribers" && (
              <Table
                headers={["Email", "Subscribed"]}
                rows={data.subscribers.map((s) => [
                  s.email,
                  new Date(s.createdAt).toLocaleDateString(),
                ])}
                emptyLabel="No subscribers yet."
              />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function Table({ headers, rows, emptyLabel }) {
  if (rows.length === 0) {
    return <p className="px-6 py-10 text-center text-moss">{emptyLabel}</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="bg-sage/50 text-forest">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-5 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-forest/5">
          {rows.map((row, i) => (
            <tr key={i} className="text-ink/80">
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
