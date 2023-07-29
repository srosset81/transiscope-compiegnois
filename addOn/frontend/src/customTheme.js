import { createTheme } from '@mui/material/styles';
import theme from './config/theme';

//Change this color to change AppBar color
const primary = '#005259';

let customTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      main: primary,
    }
  },
});

export default customTheme;
