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
    componentBgColor: {
      bgOne: 'rgba(0, 0, 0, 0.1)',
      bgTwo: 'rgba(0, 0, 0, 0.2)',
      bgThree: 'rgba(0,0,0,0.3)',
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
    },
    homePagePortalTitle: {
      fontFamily: 'Hanyi',
      fontSize: '2rem',
    },
  },
  aboutUsPortalStyle: {
    marginTop: '0rem',
    marginBottom: '0rem',
    padding: '1rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
  },
});

export default theme;
