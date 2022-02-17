import './App.css';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Landing from './pages/Landing';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header></Header>
        <Landing>
        </Landing>
        {/* <Link to='/pieces' sx={{ color: 'rain.main' }}>Projects</Link>
        <Link to='/contactme'>Contact Me</Link> */}
      </Box>
    </ThemeProvider>
  );
}