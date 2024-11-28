import { createTheme } from '@mui/material/styles';
import baseTheme from '../config/theme';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const theme = createTheme(baseTheme, {
  palette: {
    primary: {
      main: '#005259',
      contrastText: '#fff'
    },
    secondary: {
      main: '#ff9902',
    },
    tertiary: {
      main: '#03ad78',
    },
    white: {
      main: '#fff'
    },
    background: {
      default: '#fff',
    }
  },
});

export default theme;
