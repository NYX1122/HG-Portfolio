import React, { useRef, useEffect } from 'react';

import ParallaxLayer from '../components/ParallaxLayer';

import { Box, Typography } from '@mui/material';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function AboutMe({ scrollToAbout, setScrollToAbout }) {
  const { scrollYProgress } = useViewportScroll();
  const scrollRange = [0.4, 0.45];
  const movementRange = [300, -500];

  const y = useTransform(scrollYProgress, scrollRange, movementRange);

  const ref = useRef(null);

  useEffect(() => {
    if (scrollToAbout) {
      const { top } = ref.current.getBoundingClientRect();
      const modifiedTop = top - 850;
      window.scrollBy({ top: modifiedTop, left: 0, behavior: 'smooth' });
      setScrollToAbout(false);
    }
  }, [scrollToAbout, setScrollToAbout]);

  const variants = {
    move: (i) => ({
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    start: { y: 50 },
    expand: (i) => ({
      width: '211px',
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    expandStart: { width: 0 },
  };

  return (
    <Box sx={{ position: 'relative', zIndex: '6' }}>
      <Box
        component={motion.div}
        ref={ref}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: '30px',
          backgroundColor: 'rain.main',
          position: 'relative',
          zIndex: '2',
        }}
        animate={{ y: 0 }}
        style={{ y, scrollYProgress }}
      >
        <Box
          component={motion.div}
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
          custom={1}
          initial='start'
          whileInView='move'
          viewport={{ once: false }}
          variants={variants}
        ></Box>
        <Typography
          component={motion.h1}
          sx={{
            fontSize: 36,
            color: 'malachite.main',
            fontWeight: 'light',
            textShadow: '0 4px 4px #00000025',
            textAlign: 'center',
            marginBottom: '9px',
          }}
          custom={2}
          initial='start'
          whileInView='move'
          viewport={{ once: false }}
          variants={variants}
        >
          About Me
        </Typography>
        <Box
          component={motion.div}
          sx={{
            width: '211px',
            height: '2px',
            backgroundColor: 'rose.main',
            marginBottom: '10px',
          }}
          custom={3}
          initial='expandStart'
          whileInView='expand'
          viewport={{ once: false }}
          variants={variants}
        ></Box>
        <Typography
          component={motion.p}
          sx={{
            fontSize: '17px',
            color: 'malachite.main',
            fontWeight: 'regular',
            textAlign: 'left',
            paddingX: '17px',
          }}
          custom={4}
          initial='start'
          whileInView='move'
          viewport={{ once: false }}
          variants={variants}
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
      <ParallaxLayer
        scrollRange={[0.25, 0.45]}
        movementRange={[600, -900]}
        color={'rain.main'}
        height={'800px'}
        top={0}
        zIndex={'1'}
      ></ParallaxLayer>
    </Box>
  );
}
