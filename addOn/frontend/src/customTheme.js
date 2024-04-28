import { createTheme } from '@mui/material/styles';
import theme from './config/theme';

const customTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#005259',
    }
  },
});

export default customTheme;
