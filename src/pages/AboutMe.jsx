import React, { useRef, useEffect } from 'react';

import ParallaxLayer from '../components/ParallaxLayer';

import { Box, Typography } from '@mui/material';

// import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function AboutMe({ scrollToAbout, setScrollToAbout }) {
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
    }
  }, [scrollToAbout, setScrollToAbout]);

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
            height: 350,
            borderRadius: '24px',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: 'rose.main',
            marginBottom: '8px',
          }}
        ></Box>
        <Typography
          sx={{
            fontSize: 36,
            color: 'malachite.main',
            fontWeight: 'light',
            textShadow: '0 4px 4px #00000025',
            textAlign: 'center',
            marginBottom: '9px',
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
            fontSize: '17px',
            color: 'malachite.main',
            fontWeight: 'regular',
            textAlign: 'left',
            paddingX: '17px',
          }}
        >
          Hey there, my name is Hailey Gilson. I am a self-taught artist; my
          skills include photography, painting, drawing, and graphic design. I
          live in eastern Utah, and am currently pursuing a degree at Utah State
          University. I have a great passion for natural beauty, often spending
          my free time gardening or playing with my dogs and cat. Even moreso, I
          enjoy creating artwork that is meaningful and emotionally powerful to
          others, such as immortalizing the beautiful memory of lost pets, or by
          capturing the joy between devoted lovers. Please feel free to contact
          me if you have any questions about me, my art, or if you would like to
          commission an original work &#128522;
        </Typography>
      </Box>
      {/* <ParallaxLayer
        scrollRange={[0.7, 0.85]}
        movementRange={[0, -600]}
        color={'rain.main'}
        height={'866px'}
        bottom='0'
        zIndex={'4'}
      ></ParallaxLayer> */}
    </>
  );
}
