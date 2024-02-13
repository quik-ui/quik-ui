import React, {FC, PropsWithChildren} from 'react';
import {ThemeContext} from './context.ts';

interface ThemeProviderProps {
  theme: any;
}

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export {ThemeProvider};
