import React, { useState, useEffect, useRef } from 'react';

import useWindowDimensions from '../customHooks/useWindowDimensions';

import { Box, Typography } from '@mui/material';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function AboutMe() {
  const { height } = useWindowDimensions();

  const [elementTopPadding, setElementTopPadding] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentHeight = elementRef.current.clientHeight;
    console.log(currentHeight);
    setElementTopPadding(height - currentHeight - 30);
  }, []);

  const { scrollYProgress } = useViewportScroll();
  const scrollRange = [0, 0.25];
  const movementRange = [600, -400];

  const y = useTransform(scrollYProgress, scrollRange, movementRange);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: '30px',
        pt: `${elementTopPadding}px`,
        backgroundColor: 'rain.main',
      }}
      ref={elementRef}
    >
      <Box
        sx={{
          backgroundImage: 'url(/art/self_portrait_hailey.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: 340,
          height: 428,
          borderRadius: '24px',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'rose.main',
          marginBottom: '8px',
        }}
      ></Box>
      <Typography
        sx={{
          fontSize: 32,
          color: 'malachite.main',
          fontWeight: 'regular',
          textShadow: '0 4px 4px #00000040',
          textAlign: 'center',
          marginBottom: '5px',
        }}
      >
        About Me
      </Typography>
      <Box
        sx={{
          width: '211px',
          height: '2px',
          backgroundColor: 'rose.main',
          marginBottom: '10px',
        }}
      ></Box>
      <Typography
        sx={{
          fontSize: '19px',
          color: 'malachite.main',
          fontWeight: 'regular',
          textAlign: 'center',
          paddingX: '17px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore.
      </Typography>
    </Box>
  );
}
