import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  font: ['Roboto', 'sans-serif'],
  size: {
    small: '1em',
    mediumSmall: '1.5em',
    medium: '2em',
    large: '3em',
  },
  colors: {
    primary: '',
    secondary: '',
    cyan: '#e8f5f9',
    cyanDarker: '#d0e5ed',
    orange: '#ff9900',
  },
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
