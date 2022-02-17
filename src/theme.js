import { createTheme } from '@mui/material/styles';
import Quicksand from './fonts/Quicksand-VariableFont_wght.ttf';

export default createTheme({
    palette: {
        rain: {
            main: '#95ADB6'
        },
        rose: {
            main: '#CBB3BF'
        },
        malachite: {
            main: '#374B4A'
        },
        smoke: {
            main: '#1D1E2C'
        },
        overcast: {
            main: '#8DA1B9'
        }
    },
    typography: {
        fontFamily: 'Quicksand, Arial'
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Quicksand';
              font-style: normal;
              font-display: swap;
              font-weight: 300;
              src: local('Quicksand'), local('Quicksand-Regular'), url(${Quicksand}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
});