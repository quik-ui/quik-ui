import React from "react";
import { ThemeContext } from "./context";
import { ComponentWithChildren } from "../types/component";
import { Theme } from "../types/theme";

interface ThemeProviderProps {
  theme: Theme;
}

const ThemeProvider: ComponentWithChildren<ThemeProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
export type { ThemeProviderProps };
