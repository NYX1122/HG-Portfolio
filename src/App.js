import './App.css';
import React, { useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import Landing from './pages/Landing';
import PiecesOne from './pages/PiecesOne';
import PiecesTwo from './pages/PiecesTwo';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

export default function App() {
  //Used to set header visibility
  const [visibleHeader, setVisibleHeader] = useState(true);
  //Code needed to get scroll position of page for header responsiveness
  const parallax = useRef();
  let startingPoint = 0;
  const handleScroll = () => {
    if (parallax.current) {
      //used to set header visibility
      let position = parallax.current.current;
      if(position > startingPoint) {
        setVisibleHeader(false);
      } else if (position <= startingPoint) {
        setVisibleHeader(true);
      }
      startingPoint = position
    }
  };
  useEffect(() => {
    const container = document.querySelector('.parallax')
    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header visibleHeader={visibleHeader}></Header>
        <Parallax pages={2.665} ref={parallax} className='parallax' style={{ zIndex: -1 }}>
          <ParallaxLayer offset={0} speed={0}>
            <Landing></Landing>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={2} speed={4} style={{ backgroundColor: '#CBB3BF' }} /> */}

          <ParallaxLayer
            offset={1.5}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}>
            <PiecesOne></PiecesOne>
        </ParallaxLayer>
          {/* <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}>
            <PiecesTwo></PiecesTwo>
          </ParallaxLayer> */}
        </Parallax>
      </Box>
    </ThemeProvider>
  );
}