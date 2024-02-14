import { Colors } from "./colors";
import { Spacing } from "./spacing";
import { Fonts } from "./fonts";

export interface Theme {
  mode: "light" | "dark";
  colors: Colors;
  spacing: Spacing;
  fonts: Fonts;
}
