import { createTheme } from '@mui/material/styles';
import theme from './config/theme';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

const customTheme = createTheme(theme, {
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
    }
  },
});

export default customTheme;
