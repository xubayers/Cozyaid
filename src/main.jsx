import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "animate.css";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./contexts/authContext/AuthContext";
import { EmailProvider } from "./contexts/EmailContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmailProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </EmailProvider>
  </StrictMode>
);
