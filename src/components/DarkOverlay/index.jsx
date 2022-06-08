import React from 'react';

import Menu from '../Menu';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function DarkOverlay({
  toggleMenu,
  setScrollToPieces,
  setScrollToAbout,
}) {
  return (
    <Box
      component={motion.div}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      sx={{
        position: 'fixed',
        top: '0',
        width: '100vw',
        height: '100vh',
        background: '#000',
        opacity: 0.6,
        zIndex: 11,
      }}
      onClick={toggleMenu}
      key='backdrop'
    ></Box>
  );
}
