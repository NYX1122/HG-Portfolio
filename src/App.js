import './App.css';
import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import DarkCircleOverlay from './components/DarkCircleOverlay';
import Menu from './components/Menu';
import Landing from './pages/Landing';
import Pieces from './pages/Pieces';
import PiecesMed from './pages/PiecesMed';
import AboutMe from './pages/AboutMe';
import AboutMeMed from './pages/AboutMeMed';
import Commissions from './pages/Commissions';
import ContactMe from './pages/ContactMe';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

import { motion, useCycle, AnimatePresence } from 'framer-motion';

import { useScrollBlock } from './customHooks/useScrollBlock';
import useWindowSize from './customHooks/useWindowSize';

import { polyfill } from 'seamless-scroll-polyfill';

export default function App() {
  //responsive window
  const { width } = useWindowSize();

  //Ios autoscroll
  polyfill();

  //AutoScroll
  const [scrollToPieces, setScrollToPieces] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [scrollToCommissions, setScrollToCommissions] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);
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
      transition: { duration: 0.35 },
    },
    closed: {
      scale: 0,
      transition: { duration: 0.35 },
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
              setScrollToCommissions={setScrollToCommissions}
              setScrollToContact={setScrollToContact}
              activate={openMenu}
              variants={{
                open: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.35 },
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
        <Header toggleMenu={toggleMenu} width={width}></Header>
        <Landing></Landing>
        {width >= 900 ? (
          <PiecesMed
            scrollToPieces={scrollToPieces}
            setScrollToPieces={setScrollToPieces}
          ></PiecesMed>
        ) : (
          <Pieces
            scrollToPieces={scrollToPieces}
            setScrollToPieces={setScrollToPieces}
          ></Pieces>
        )}
        {width >= 900 ? (
          <AboutMeMed
            scrollToAbout={scrollToAbout}
            setScrollToAbout={setScrollToAbout}
          ></AboutMeMed>
        ) : (
          <AboutMe
            scrollToAbout={scrollToAbout}
            setScrollToAbout={setScrollToAbout}
          ></AboutMe>
        )}
        <Commissions
          scrollToCommissions={scrollToCommissions}
          setScrollToCommissions={setScrollToCommissions}
        ></Commissions>
        <ContactMe
          scrollToContact={scrollToContact}
          setScrollToContact={setScrollToContact}
        ></ContactMe>
      </Box>
    </ThemeProvider>
  );
}
