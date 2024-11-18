import { useContext } from "react";
import { AuthContext } from "../contexts/authContext/AuthContext";

export function useAuth() {
  return useContext(AuthContext);
}
