import { useContext } from "react";
import { EmailContext } from "../contexts/EmailContext";

function useEmail() {
  return useContext(EmailContext);
}

export { useEmail };
