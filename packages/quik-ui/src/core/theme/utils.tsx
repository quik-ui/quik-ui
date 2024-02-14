import React from "react";
import { forwardRef, useContext, useEffect, useMemo, useState } from "react";
import { Appearance, StyleSheet } from "react-native";
import { ThemeContext } from "./context";
import { defaultsDeep } from "lodash";
import { Theme } from "../types/theme";
import { defaultTheme } from "./theme";

function withTheme(WrappedElement: any) {
  return forwardRef((props, ref) => {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          return <WrappedElement ref={ref} {...props} theme={theme} />;
        }}
      </ThemeContext.Consumer>
    );
  });
}

function useTheme(): Theme {
  return useContext(ThemeContext);
}

function useCreateTheme(theme: Partial<Theme>): {
  theme: Theme;
} {
  const [value, setValue] = useState<Theme>(defaultsDeep(theme, defaultTheme));

  useEffect(() => {
    const callback = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) setValue({ ...value, mode: colorScheme });
    });
    return () => {
      callback.remove();
    };
  }, []);

  return { theme: value };
}

function useStyles<T extends StyleSheet.NamedStyles<T>>(
  styles:
    | T
    | StyleSheet.NamedStyles<T>
    | ((theme: Theme) => T)
    | ((theme: Theme) => StyleSheet.NamedStyles<T>),
): StyleSheet.NamedStyles<T> {
  const theme = useTheme();

  return useMemo(
    () =>
      StyleSheet.create(typeof styles === "function" ? styles(theme) : styles),
    [styles, theme],
  );
}

function setTheme(mode: Theme["mode"]) {
  return Appearance.setColorScheme(mode);
}

export { withTheme, useTheme, useCreateTheme, useStyles, setTheme };
