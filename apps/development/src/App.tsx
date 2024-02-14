import React from 'react';
import {ThemeProvider, useCreateTheme} from 'quik-ui';

function App() {
  const {theme} = useCreateTheme({mode: 'light'});

  return <ThemeProvider theme={theme}></ThemeProvider>;
}
export default App;
