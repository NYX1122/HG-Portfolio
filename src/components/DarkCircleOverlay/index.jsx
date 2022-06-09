import React from 'react';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function DarkCircleOverlay({
  selectPiece,
  variants,
  top,
  left,
  zIndex,
}) {
  return (
    <Box
      component={motion.div}
      sx={{
        width: '10px',
        height: '10px',
        background: '#000',
        borderRadius: '100px',
        top: '50%',
        left: '50%',
        zIndex: 20,
        position: 'fixed',
      }}
      initial={{ opacity: 0 }}
      animate={selectPiece}
      variants={variantsTwo}
    ></Box>
  );
}
