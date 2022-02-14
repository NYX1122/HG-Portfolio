import './App.css';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import { Typography } from '@mui/material';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant='h3' color='rain.main'>Hello</Typography>
        <Link to='/pieces' sx={{ color: 'rain.main' }}>Projects</Link>
        <Link to='/contactme'>Contact Me</Link>
      </div>
    </ThemeProvider>
  );
}