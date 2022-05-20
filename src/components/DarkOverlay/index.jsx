import React from 'react';

import Menu from '../Menu';

import { Box } from '@mui/material';

export default function DarkOverlay() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          background: '#000',
          opacity: 0.6,
        }}
      ></Box>
      <Box sx={{ width: '35.31vw', display: 'flex', justifyContent: 'center' }}>
        <Menu></Menu>
      </Box>
    </>
  );
}
