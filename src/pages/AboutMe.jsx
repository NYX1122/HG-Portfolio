import React, { useRef, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';

export default function AboutMe({ scrollToAbout, setScrollToAbout }) {
  //autoscroll effect
  const ref = useRef(null);
  useEffect(() => {
    if (scrollToAbout) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
      setScrollToAbout(false);
    }
  }, [scrollToAbout, setScrollToAbout]);

  //animation variants
  const variants = {
    move: (i) => ({
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    start: { y: 50 },
    expand: (i) => ({
      width: '45vw',
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    expandStart: { width: 0 },
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: '70px',
        backgroundColor: 'rain.main',
        position: 'relative',
        zIndex: '2',
      }}
    >
      <Box
        component={motion.div}
        sx={{
          backgroundImage: 'url(/art/self_portrait_hailey.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '85vw',
          height: '45vh',
          borderRadius: '24px',
          borderWidth: '3px',
          borderStyle: 'solid',
          borderColor: 'rose.main',
          marginBottom: '8px',
        }}
        custom={1}
        initial='start'
        whileInView='move'
        viewport={{ once: false, margin: '2000px 0px 0px 0px', amount: 'all' }}
        variants={variants}
      ></Box>
      <Typography
        component={motion.h1}
        sx={{
          fontSize: { xs: '30px' },
          color: 'malachite.main',
          fontWeight: 'light',
          textShadow: '0 4px 4px #00000025',
          textAlign: 'center',
          marginBottom: '9px',
        }}
        custom={2}
        initial='start'
        whileInView='move'
        viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
        variants={variants}
      >
        About Me
      </Typography>
      <Box
        component={motion.div}
        sx={{
          width: '45vw',
          height: '2px',
          backgroundColor: 'rose.main',
          marginBottom: '10px',
        }}
        custom={3}
        initial='expandStart'
        whileInView='expand'
        viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
        variants={variants}
      ></Box>
      <Typography
        component={motion.p}
        sx={{
          fontSize: '16px',
          color: 'malachite.main',
          fontWeight: 'regular',
          textAlign: 'left',
          width: '85vw',
        }}
        custom={4}
        initial='start'
        whileInView='move'
        viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
        variants={variants}
      >
        Hey there, my name is Hailey Gilson. I am a self-taught artist; my
        skills include photography, painting, drawing, and graphic design. I
        live in eastern Utah, and am currently pursuing a degree at Utah State
        University. I have a great passion for natural beauty, often spending my
        free time gardening or playing with my dogs and cat. Even moreso, I
        enjoy creating artwork that is meaningful and emotionally powerful to
        others, such as immortalizing the beautiful memory of lost pets, or by
        capturing the joy between devoted lovers. Please feel free to contact me
        if you have any questions about me, my art, or if you would like to
        commission an original work &#128522;
      </Typography>
    </Box>
  );
}
