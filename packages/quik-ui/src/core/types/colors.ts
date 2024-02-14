export type ColorsNames =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type ColorsVariations =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type ThemeColors = {
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  inverseSurface: string;
  onInverseSurface: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  info: string;
  onInfo: string;
  success: string;
  onSuccess: string;
  shadow: string;
  outline: string;
};

export type BaseColors = {
  [K in ColorsNames]: { [K in ColorsVariations]: string };
} & {
  black: string;
  white: string;
};

export type Colors = BaseColors & ThemeColors;
