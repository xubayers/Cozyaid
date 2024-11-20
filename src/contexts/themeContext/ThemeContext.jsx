/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themeState, setThemeState] = useState(true);

  useEffect(() => {
    const html = document.querySelector("html");
    if (themeState) {
      html.setAttribute("class", "light");
    } else {
      html.setAttribute("class", "dark");
    }
  }, [themeState]);

  return (
    <ThemeContext.Provider value={{ themeState, setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
