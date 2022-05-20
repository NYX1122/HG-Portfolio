import React from 'react';

import { Box } from '@mui/material';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function ParallaxLayer({
  scrollRange,
  movementRange,
  color,
  height,
  top,
  bottom,
  zIndex,
}) {
  const { scrollYProgress } = useViewportScroll();

  const y = useTransform(scrollYProgress, scrollRange, movementRange);

  return (
    <>
      <Box
        component={motion.div}
        sx={{
          height: height,
          width: '100vw',
          position: 'absolute',
          top: top,
          bottom: bottom,
          backgroundColor: color,
          zIndex: zIndex,
        }}
        animate={{ y: 0 }}
        style={{ y, scrollYProgress }}
      ></Box>
    </>
  );
}
