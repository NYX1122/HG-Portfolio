import './App.css';
import { Link } from 'react-router-dom';

import Header from './components/Header';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import { Typography } from '@mui/material';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header></Header>
        <Link to='/pieces' sx={{ color: 'rain.main' }}>Projects</Link>
        <Link to='/contactme'>Contact Me</Link>
      </div>
    </ThemeProvider>
  );
}