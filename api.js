// Thin fetch wrapper around the Express API.
// In dev, VITE_API_URL is empty and Vite proxies `/api` to the backend.
// In production, set VITE_API_URL to the deployed API origin (e.g. https://api.verde.com).
const BASE = import.meta.env.VITE_API_URL ?? "";

async function request(path, { method = "GET", body, token } = {}) {
  const res = await fetch(`${BASE}/api${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`);
  }
  return data;
}

export const api = {
  // Public
  createReservation: (body) => request("/reservations", { method: "POST", body }),
  createContact: (body) => request("/contact", { method: "POST", body }),
  subscribe: (body) => request("/newsletter", { method: "POST", body }),
  login: (body) => request("/auth/login", { method: "POST", body }),

  // Admin (require token)
  getReservations: (token) => request("/reservations", { token }),
  getContacts: (token) => request("/contact", { token }),
  getSubscribers: (token) => request("/newsletter", { token }),
};
