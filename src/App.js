import './App.css';
import React, { useEffect, useRef, useState } from 'react';

import Header from './components/Header';
import DarkOverlay from './components/DarkOverlay';
import Landing from './pages/Landing';
import Pieces from './pages/Pieces';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

export default function App() {
  //Used to set header visibility
  const [visibleHeader, setVisibleHeader] = useState(true);
  //Used to set header menu visibility
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);
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
        <Header visibleHeader={visibleHeader} setShowHeaderMenu={setShowHeaderMenu}></Header>
        <DarkOverlay showHeaderMenu={showHeaderMenu} setShowHeaderMenu={setShowHeaderMenu} parallax={parallax}></DarkOverlay>
        <Parallax pages={2.665} ref={parallax} className='parallax' style={{ zIndex: -2 }}>
          <ParallaxLayer offset={0} speed={0}>
            <Landing></Landing>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.5}
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
      </Box>
    </ThemeProvider>
  );
}