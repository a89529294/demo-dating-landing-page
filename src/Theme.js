import { createMuiTheme } from '@material-ui/core/styles';

const customGrey = 'rgba(0, 0, 0, 0.5)';

const theme = createMuiTheme({
  palette: {
    common: {
      green: '#5AFF3D',
    },
    primary: {
      main: customGrey,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
  },
});

export default theme;
