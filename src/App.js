import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import DarkCircleOverlay from './components/DarkCircleOverlay';
import Menu from './components/Menu';
import Landing from './pages/Landing';
import Pieces from './pages/Pieces';
import AboutMe from './pages/AboutMe';
import Commissions from './pages/Commissions';
import ContactMe from './pages/ContactMe';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

import { motion, useCycle, AnimatePresence } from 'framer-motion';

import { useScrollBlock } from './customHooks/useScrollBlock';

import { polyfill } from 'seamless-scroll-polyfill';

export default function App() {
  //Ios autoscroll
  polyfill();

  //AutoScroll
  const [scrollToPieces, setScrollToPieces] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [openMenu, setOpenMenu] = useCycle('closed', 'open');
  const [blockScroll, allowScroll] = useScrollBlock();

  //parallax bug fix and autoscroll to top on refresh
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

  //Menu toggle
  const toggleMenu = () => {
    if (openMenu === 'open') {
      setOpenMenu('closed');
      allowScroll();
    } else {
      setOpenMenu('open');
      blockScroll();
    }
  };

  const circleVariants = {
    open: {
      scale: 200,
      opacity: 0.6,
      transition: { duration: 0.7 },
    },
    closed: {
      scale: 0,
      transition: { duration: 0.7 },
      opacity: 0,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        position='relative'
      >
        <AnimatePresence>
          {openMenu === 'open' && (
            <Menu
              toggleMenu={toggleMenu}
              setScrollToPieces={setScrollToPieces}
              setScrollToAbout={setScrollToAbout}
              activate={openMenu}
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                },
              }}
            ></Menu>
          )}
        </AnimatePresence>
        <DarkCircleOverlay
          width='10px'
          height='10px'
          background='#000'
          borderRadius='100px'
          left='50%'
          zIndex='15'
          position='fixed'
          activate={openMenu}
          variants={circleVariants}
          toggle={toggleMenu}
        ></DarkCircleOverlay>
        <Header toggleMenu={toggleMenu}></Header>
        <Landing></Landing>
        <Pieces
          scrollToPieces={scrollToPieces}
          setScrollToPieces={setScrollToPieces}
        ></Pieces>
        <AboutMe
          scrollToAbout={scrollToAbout}
          setScrollToAbout={setScrollToAbout}
        ></AboutMe>
        <Commissions></Commissions>
        <ContactMe></ContactMe>
      </Box>
    </ThemeProvider>
  );
}
