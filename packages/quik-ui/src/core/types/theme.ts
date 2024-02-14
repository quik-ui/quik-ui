import { Colors } from "./colors";
import { Elevation } from "./elevation";
import { Typography } from "./typography";
import { Radius } from "./radius";
import { Spacing } from "./spacing";

export interface Theme {
  mode: "light" | "dark";
  colors: Colors;
  elevation: Elevation;
  typography: Typography;
  radius: Radius;
  spacing: Spacing;
}
