import './App.css';
import React from 'react';

import Header from './components/Header';
import DarkOverlay from './components/DarkOverlay';
import Landing from './pages/Landing';
import Pieces from './pages/Pieces';
import AboutMe from './pages/AboutMe';

import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

import theme from './theme';

import { motion } from 'framer-motion';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Header></Header>
        {/* <DarkOverlay
          showHeaderMenu={showHeaderMenu}
          setShowHeaderMenu={setShowHeaderMenu}
        ></DarkOverlay> */}
        <Landing></Landing>
        <Pieces></Pieces>
        <AboutMe></AboutMe>
      </Box>
    </ThemeProvider>
  );
}
