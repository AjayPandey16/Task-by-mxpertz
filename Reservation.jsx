import { useState } from "react";
import { site } from "../lib/content.js";
import { api } from "../lib/api.js";

const guestOptions = ["1", "2", "3", "4", "5", "6", "7+"];

const emptyForm = { name: "", email: "", date: "", time: "", guests: "2" };

export default function Reservation() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      await api.createReservation({ ...form, guests: String(form.guests) });
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(emptyForm);
    setStatus("idle");
    setError("");
  };

  return (
    <section id="reserve" className="bg-forest py-24 text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-eyebrow text-xs font-semibold text-leaf/90">
            Reservations
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">
            Reserve your table
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-cream/75">
            Join us for lunch or dinner. Book online in seconds — for parties of
            eight or more, give us a call and we&apos;ll take care of the rest.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span className="text-cream/90">{site.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <span className="text-cream/90">{site.address}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">🕒</span>
              <ul className="text-cream/90">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    <span className="font-medium">{h.day}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-3xl bg-cream p-8 text-ink shadow-2xl sm:p-10">
          {status === "success" ? (
            <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-forest/10 text-3xl">
                ✅
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest">
                Table requested!
              </h3>
              <p className="mt-2 max-w-xs text-moss">
                Thanks, {form.name || "friend"}. We&apos;ve received your request
                for {form.guests} on {form.date || "your chosen date"}. A
                confirmation is on its way to {form.email || "your inbox"}.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-6 rounded-full border border-forest/30 px-6 py-2.5 text-sm font-semibold text-forest hover:bg-sage"
              >
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Full name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jane Appleseed"
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jane@email.com"
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Date
                  </label>
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                    className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Time
                  </label>
                  <input
                    required
                    type="time"
                    value={form.time}
                    onChange={update("time")}
                    className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink">
                  Guests
                </label>
                <select
                  value={form.guests}
                  onChange={update("guests")}
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
                >
                  {guestOptions.map((g) => (
                    <option key={g} value={g}>
                      {g} {g === "1" ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              {status === "error" && (
                <p className="rounded-lg bg-clay/10 px-4 py-3 text-sm text-clay">
                  {error || "Something went wrong. Please try again."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Confirm Reservation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
