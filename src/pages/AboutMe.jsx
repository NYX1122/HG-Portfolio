import React, { useState, useEffect, useRef } from 'react';

import ParallaxLayer from '../components/ParallaxLayer';

import useWindowDimensions from '../customHooks/useWindowDimensions';

import { Box, Typography } from '@mui/material';

// import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function AboutMe() {
  const { height } = useWindowDimensions();

  const [elementTopPadding, setElementTopPadding] = useState(0);
  const elementRef = useRef(null);

  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const currentHeight = elementRef.current.clientHeight;
    setElementTopPadding(height - currentHeight - 30);
  }, [height]);

  useEffect(() => {
    const currentDocumentHeight = window.document.body.offsetHeight;
    setDocumentHeight(currentDocumentHeight * -1 + 895);
    console.log(documentHeight);
  }, [documentHeight]);

  // const { scrollYProgress } = useViewportScroll();
  // const scrollRange = [0.75, 1];
  // const movementRange = [400, 0];

  // const y = useTransform(scrollYProgress, scrollRange, movementRange);

  return (
    <>
      <Box
        // component={motion.div}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pb: '30px',
          pt: `${elementTopPadding}px`,
          backgroundColor: 'rain.main',
          position: 'relative',
          zIndex: '5',
        }}
        ref={elementRef}
        // animate={{ y: 0 }}
        // style={{ y, scrollYProgress }}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore.
        </Typography>
      </Box>
      <ParallaxLayer
        scrollRange={[0.7, 0.85]}
        movementRange={[0, -600]}
        color={'rain.main'}
        height={'866px'}
        bottom={`${documentHeight}px`}
        zIndex={'4'}
      ></ParallaxLayer>
    </>
  );
}
