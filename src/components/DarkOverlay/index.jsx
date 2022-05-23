import React from 'react';

import Menu from '../Menu';

import { Box } from '@mui/material';

export default function DarkOverlay({
  toggleMenu,
  setScrollToPieces,
  setScrollToAbout,
}) {
  return (
    <>
      <Box
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
      ></Box>
      <Menu
        setScrollToPieces={setScrollToPieces}
        setScrollToAbout={setScrollToAbout}
      ></Menu>
    </>
  );
}
