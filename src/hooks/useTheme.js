import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext/ThemeContext";

function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme };
