import { useState } from "react";
import { navLinks, site } from "../lib/content.js";
import { api } from "../lib/api.js";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await api.subscribe({ email });
      setEmail("");
      setStatus("success");
      setMessage("You're on the list! 🌿");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  };

  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-serif text-2xl font-bold text-cream">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-cream/60">
              A farm-to-table restaurant serving seasonal, locally-sourced
              dishes in a warm, light-filled space.
            </p>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-6 max-w-sm">
              <label className="text-sm font-medium text-cream/80">
                Get seasonal menu updates
              </label>
              <div className="mt-2 flex gap-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full rounded-full border border-cream/20 bg-transparent px-4 py-2.5 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-leaf"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="shrink-0 rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest disabled:opacity-60"
                >
                  {status === "loading" ? "…" : "Join"}
                </button>
              </div>
              {message && (
                <p
                  className={`mt-2 text-xs ${
                    status === "error" ? "text-clay" : "text-leaf"
                  }`}
                >
                  {message}
                </p>
              )}
            </form>

            <div className="mt-6 flex gap-3">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-cream/20 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-leaf hover:text-cream"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 transition-colors hover:text-leaf"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cream">
              Visit
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li>{site.address}</li>
              <li>{site.phone}</li>
              <li>{site.email}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-sm text-cream/50 sm:flex-row">
          <p>
            © {2026} {site.name}. All rights reserved.
          </p>
          <p>Made with 🌿 for good food.</p>
        </div>
      </div>
    </footer>
  );
}
