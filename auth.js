// Minimal token persistence for the admin area. The JWT is stored in
// localStorage and attached to protected requests via lib/api.js.
const TOKEN_KEY = "verde.admin.token";

export const auth = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  setToken: (token) => localStorage.setItem(TOKEN_KEY, token),
  clearToken: () => localStorage.removeItem(TOKEN_KEY),
  isAuthenticated: () => Boolean(localStorage.getItem(TOKEN_KEY)),
};
