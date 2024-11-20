import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AuthenteAccess({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (user && !location.state) {
    return <Navigate to="/" />;
  }

  // If the user is not logged in, allow access to the auth pages
  return children;
}

export default AuthenteAccess;
