import { useState } from "react";
import { site } from "../lib/content.js";
import { api } from "../lib/api.js";

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
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
      await api.createContact(form);
      setForm(emptyForm);
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="section-eyebrow text-xs font-semibold text-leaf">
          Get in Touch
        </p>
        <h2 className="mt-4 font-serif text-4xl font-bold text-ink sm:text-5xl">
          Say hello
        </h2>
        <p className="mt-4 text-moss">
          Questions, private events, or feedback — drop us a line and we&apos;ll
          get back to you. Prefer to talk? Call {site.phone}.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 max-w-xl space-y-5 text-left"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ink">
                Name
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
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={update("message")}
              placeholder="How can we help?"
              className="w-full resize-none rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
            />
          </div>

          {status === "success" && (
            <p className="rounded-lg bg-forest/10 px-4 py-3 text-sm text-forest">
              Thanks for reaching out — we&apos;ll be in touch soon. 🌿
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg bg-clay/10 px-4 py-3 text-sm text-clay">
              {error || "Something went wrong. Please try again."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
