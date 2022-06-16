import React from 'react';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function DarkCircleOverlay({
  width,
  height,
  background,
  position,
  top,
  left,
  zIndex,
  variants,
  activate,
  toggle,
  initial,
}) {
  return (
    <Box
      component={motion.div}
      sx={{
        width: width,
        height: height,
        background: background,
        borderRadius: '100px',
        top: top,
        left: left,
        zIndex: zIndex,
        position: position,
      }}
      initial={initial ? initial : { opacity: 0 }}
      animate={activate}
      variants={variants}
      onClick={toggle}
    ></Box>
  );
}
