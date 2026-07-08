import { Navigate } from "react-router-dom";
import { auth } from "../lib/auth.js";

// Gates admin routes: redirects to the login page when no token is present.
export default function ProtectedRoute({ children }) {
  if (!auth.isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}
