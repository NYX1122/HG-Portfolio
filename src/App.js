import './App.css';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Landing from './pages/Landing';
import Pieces from './pages/Pieces';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header></Header>
        <Parallax pages={2}>
          <ParallaxLayer offset={0} speed={0}>
            <Landing></Landing>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={4} style={{ backgroundColor: '#CBB3BF' }} />
          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}>
            <Pieces></Pieces>
        </ParallaxLayer>
        </Parallax>
        {/* <Link to='/pieces' sx={{ color: 'rain.main' }}>Projects</Link>
        <Link to='/contactme'>Contact Me</Link> */}
      </Box>
    </ThemeProvider>
  );
}