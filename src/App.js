import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import DarkOverlay from './components/DarkOverlay';
import Landing from './pages/Landing';
import Pieces from './pages/Pieces';
import AboutMe from './pages/AboutMe';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

import { motion } from 'framer-motion';

import { useScrollBlock } from './customHooks/useScrollBlock';

export default function App() {
  const [scrollToPieces, setScrollToPieces] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      blockScroll();
    } else {
      allowScroll();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0.5, left: 0, behavior: 'smooth' });
    }, 100);
    const timer2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 200);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {openMenu && (
        <DarkOverlay
          toggleMenu={toggleMenu}
          setScrollToPieces={setScrollToPieces}
          setScrollToAbout={setScrollToAbout}
        ></DarkOverlay>
      )}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        position='relative'
      >
        <Header toggleMenu={toggleMenu}></Header>
        <Landing></Landing>
        <Pieces
          scrollToPieces={scrollToPieces}
          setScrollToPieces={setScrollToPieces}
          toggleMenu={toggleMenu}
        ></Pieces>
        <AboutMe
          scrollToAbout={scrollToAbout}
          setScrollToAbout={setScrollToAbout}
          toggleMenu={toggleMenu}
        ></AboutMe>
      </Box>
    </ThemeProvider>
  );
}
