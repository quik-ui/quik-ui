import { createContext } from "react";
import { Theme } from "../types/theme";

const ThemeContext = createContext<Theme>({
  mode: "light",
  colors: {},
  fonts: {},
  spacing: {},
});

export { ThemeContext };
