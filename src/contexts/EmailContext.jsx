/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const EmailContext = createContext();

function EmailProvider({ children }) {
  const [email, setEmail] = useState("");
  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
}

export { EmailContext, EmailProvider };
