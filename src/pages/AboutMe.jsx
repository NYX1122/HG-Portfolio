import React, { useRef, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';

import useWindowSize from '../customHooks/useWindowSize';

export default function AboutMe({ scrollToAbout, setScrollToAbout }) {
  //autoscroll effect
  const { width } = useWindowSize();
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

  const dataArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const dataArrayLength = dataArray.length;

  const roseSunVariants = {
    start: (i) => ({
      rotate: (360 / dataArrayLength) * i,
      height: '0vh',
    }),
    expand: {
      height: '150vh',
      transition: {
        duration: 1.2,
      },
    },
    move: (i) => ({
      rotate: (360 / dataArrayLength) * i + 360 / dataArrayLength,
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: 'loop',
        type: 'tween',
        ease: 'linear',
      },
    }),
  };

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: { xs: '70px', sm: '0px' },
        pb: { sm: '35px' },
        mt: { sm: '35px' },
        backgroundColor: 'rain.main',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component={motion.div}
          sx={{
            backgroundImage: 'url(/art/self_portrait_hailey.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: { xs: '85vw', sm: '40vw' },
            height: { xs: '45vh', sm: '46vh' },
            borderRadius: '24px',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: 'rose.main',
            marginBottom: '8px',
          }}
          custom={2}
          initial='start'
          whileInView='move'
          viewport={{
            once: false,
            margin: '2000px 0px 0px 0px',
          }}
          variants={variants}
        ></Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component={motion.h1}
            sx={{
              fontSize: { xs: '30px', sm: '34px' },
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
              backgroundColor: 'malachite.main',
              marginBottom: '20px',
            }}
            custom={3}
            initial='expandStart'
            whileInView='expand'
            viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
            variants={variants}
          ></Box>
          <Box
            component={motion.div}
            sx={{
              backgroundColor: '#00000015',
              borderRadius: '25px',
              px: '19px',
              py: '10px',
            }}
            custom={4}
            initial='start'
            whileInView='move'
            viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
            variants={variants}
          >
            <Typography
              sx={{
                fontSize: { xs: '16px', sm: '19px' },
                color: 'white',
                fontWeight: 'light',
                textAlign: 'left',
                width: { xs: '85vw', sm: '75vw' },
              }}
            >
              Hey there, my name is Hailey Gilson. I am a self-taught artist; my
              skills include photography, painting, drawing, and graphic design.
              I live in eastern Utah, and am currently pursuing a degree at Utah
              State University. I have a great passion for natural beauty, often
              spending my free time gardening or playing with my dogs and cat.
              Even moreso, I enjoy creating artwork that is meaningful and
              emotionally powerful to others, such as immortalizing the
              beautiful memory of lost pets, or by capturing the joy between
              devoted lovers. Please feel free to contact me if you have any
              questions about me, my art, or if you would like to commission an
              original work. &#128522;
            </Typography>
          </Box>
        </Box>
      </Box>
      {width > 600 && (
        <>
          <Box
            component={motion.div}
            sx={{
              width: '80vw',
              height: '80vw',
              backgroundColor: 'rose.main',
              borderRadius: '100%',
              position: 'absolute',
              top: '-40vw',
            }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '100% 0px -90% 0px' }}
          ></Box>
          {dataArray.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: 'absolute',
              }}
            >
              <Box
                component={motion.div}
                sx={{
                  width: '10px',
                  height: '150vh',
                  backgroundColor: 'rose.main',
                  position: 'absolute',
                  transform: `rotate(${(360 / dataArrayLength) * item}deg)`,
                  transformOrigin: 'top',
                }}
                custom={item}
                whileInView={['expand', 'move']}
                viewport={{ once: true, margin: '100% 0px -90% 0px' }}
                initial='start'
                variants={roseSunVariants}
              ></Box>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}
