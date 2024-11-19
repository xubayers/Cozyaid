/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function AuthenteAccess({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  console.log(location);

  if (user) {
    return <Navigate to={"/"} />;
  }
  return children;
}

export default AuthenteAccess;
