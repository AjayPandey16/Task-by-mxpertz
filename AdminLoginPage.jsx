import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../lib/api.js";
import { auth } from "../lib/auth.js";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | error
  const [error, setError] = useState("");

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const { token } = await api.login(form);
      auth.setToken(token);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-sage/40 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">
        <Link to="/" className="flex items-center justify-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-serif text-2xl font-bold text-forest">
            Verde
          </span>
        </Link>
        <h1 className="mt-6 text-center font-serif text-2xl font-bold text-ink">
          Admin sign in
        </h1>
        <p className="mt-2 text-center text-sm text-moss">
          Manage reservations, messages, and subscribers.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="admin@verde.restaurant"
              className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Password
            </label>
            <input
              required
              type="password"
              value={form.password}
              onChange={update("password")}
              placeholder="••••••••"
              className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-forest"
            />
          </div>

          {status === "error" && (
            <p className="rounded-lg bg-clay/10 px-4 py-3 text-sm text-clay">
              {error || "Invalid credentials."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-leaf disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
