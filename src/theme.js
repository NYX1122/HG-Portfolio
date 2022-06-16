import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    rain: {
      main: '#95ADB6',
    },
    rose: {
      main: '#CBB3BF',
    },
    malachite: {
      main: '#374B4A',
    },
    smoke: {
      main: '#1D1E2C',
    },
    overcast: {
      main: '#8DA1B9',
    },
    action: {
      disabledBackground: 'malachite.main',
      disabled: 'rose.main',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
});
