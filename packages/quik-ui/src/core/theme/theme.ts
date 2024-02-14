import { Theme } from "../types/theme";
import { colors } from "./colors";

const defaultTheme: Theme = {
  mode: "light",
  colors: colors,
  typography: {},
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  elevation: {
    xs: 1,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 16,
  },
};

export { defaultTheme };
