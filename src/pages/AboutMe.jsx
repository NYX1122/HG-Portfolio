import React, { useRef, useEffect } from 'react';

import ParallaxLayer from '../components/ParallaxLayer';

import { Box, Typography } from '@mui/material';

// import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function AboutMe({
  scrollToAbout,
  setScrollToAbout,
  toggleMenu,
}) {
  // const { scrollYProgress } = useViewportScroll();
  // const scrollRange = [0.75, 1];
  // const movementRange = [400, 0];

  // const y = useTransform(scrollYProgress, scrollRange, movementRange);

  const ref = useRef(null);

  useEffect(() => {
    if (scrollToAbout) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
      setScrollToAbout(false);
      toggleMenu();
    }
  }, [scrollToAbout, setScrollToAbout, toggleMenu]);

  return (
    <>
      <Box
        ref={ref}
        // component={motion.div}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pb: '30px',
          pt: '30px',
          backgroundColor: 'rain.main',
          position: 'relative',
          zIndex: '5',
        }}
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
        bottom='0'
        zIndex={'4'}
      ></ParallaxLayer>
    </>
  );
}
