import React, { useRef, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';

import useWindowSize from '../customHooks/useWindowSize';

export default function AboutCommissionsMed({
  scrollToAbout,
  setScrollToAbout,
  scrollToCommissions,
  setScrollToCommissions,
}) {
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
      height: '180vh',
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

  //commissions
  const sectionData = [
    {
      title: 'Watercolor',
      prices: ['$20 - $85', '$50 - $180', '$100 - $250'],
    },
    {
      title: 'Oil',
      prices: ['$45 - $100', '$85 - $200', '$140 - $350'],
    },
    {
      title: 'Graphite',
      prices: ['$30 - $80', '$45 - $120', '$80 - $200'],
    },
    {
      title: 'Acrylic',
      prices: ['$35 - $100', '$60 - $180', '$120 - $300'],
    },
  ];

  const commissionsRef = useRef(null);
  useEffect(() => {
    if (scrollToCommissions) {
      const { top } = commissionsRef.current.getBoundingClientRect();
      window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
      setScrollToCommissions(false);
    }
  }, [scrollToCommissions, setScrollToCommissions]);

  const commissionsVariants = {
    artStyleAnim: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    artStyleStart: { x: -50, opacity: 0 },

    backDropAnim: {
      scaleY: 1,
      transition: {
        delay: 0.2,
      },
    },
    backDropStart: { scaleY: 0 },

    sizeAnim: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.25,
      },
    }),
    sizeStart: { x: -50, opacity: 0 },

    priceStart: { x: 50, opacity: 0 },

    dashAnim: (i) => ({
      scaleX: 1,
      transition: {
        delay: i * 0.25,
      },
    }),
    dashStart: { scaleX: 0 },
  };

  const { width } = useWindowSize();

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: { md: '30px', lg: '3vw' },
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
          flexDirection: 'row',
          justifyContent: { md: 'center', lg: 'start' },
          width: { md: '100vw', lg: '70vw' },
          px: { lg: '3vw' },
        }}
      >
        {width >= 1200 && (
          <Box
            sx={{
              backgroundImage: 'url(/art/tree_blossoms_opaque.png)',
              backgroundSize: '100%',
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              top: '-1.5vw',
              left: '66vw',
              zIndex: 1,
              width: '40vw',
              height: '55vw',
            }}
          ></Box>
        )}
        <Box
          component={motion.div}
          sx={{
            backgroundImage: 'url(/art/self_portrait_hailey.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: { md: '33vw', lg: '28vw' },
            height: { md: '52vw', lg: '40vw' },
            borderRadius: '24px',
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: 'rose.main',
            mr: '3vw',
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
            alignItems: 'flex-start',
            justifyContent: 'top',
          }}
        >
          <Typography
            component={motion.h1}
            sx={{
              fontSize: '38px',
              color: 'malachite.main',
              fontWeight: 'light',
              textShadow: '0 4px 4px #00000025',
              textAlign: 'center',
              marginBottom: '9px',
              ml: '3vw',
            }}
            custom={2}
            initial='start'
            whileInView='move'
            viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
            variants={variants}
          >
            About
          </Typography>
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
                fontSize: '21px',
                color: 'white',
                fontWeight: 'light',
                textAlign: 'left',
                width: { md: '50vw', lg: '32vw' },
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          py: '70px',
          px: '30px',
          position: 'relative',
          zIndex: 2,
          width: '58vw',
        }}
        ref={commissionsRef}
      >
        <Typography
          component={motion.h1}
          sx={{
            fontSize: '38px',
            color: 'malachite.main',
            fontWeight: 'light',
            textShadow: '0 4px 4px #00000025',
            textAlign: 'left',
            mb: '20px',
            position: 'relative',
          }}
          viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Commissions
        </Typography>
        {sectionData.map((item, index) => (
          <Box key={index}>
            <Typography
              component={motion.p}
              sx={{
                fontWeight: 'light',
                color: 'white',
                fontSize: { xs: '30px', sm: '34px' },
                textShadow: '0 4px 4px #00000025',
                ml: '19px',
              }}
              initial='artStyleStart'
              whileInView='artStyleAnim'
              variants={commissionsVariants}
            >
              {item.title}
            </Typography>
            <Box
              component={motion.div}
              sx={{
                backgroundColor: '#00000015',
                borderRadius: '25px',
                px: '19px',
                py: '10px',
              }}
              initial='backDropStart'
              whileInView='backDropAnim'
              variants={commissionsVariants}
            >
              {item.prices.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    width: 'auto',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <Typography
                    component={motion.p}
                    sx={{
                      textAlign: 'left',
                      fontSize: { xs: '22px', sm: '24px' },
                      color: 'white',
                      textShadow: '0 4px 4px #00000025',
                    }}
                    custom={index + 1}
                    initial='sizeStart'
                    whileInView='sizeAnim'
                    variants={commissionsVariants}
                  >
                    {index === 0 ? 'Small' : index === 1 ? 'Medium' : 'Large'}
                  </Typography>

                  <Box
                    component={motion.div}
                    sx={{
                      height: '2px',
                      backgroundColor: 'white',
                      flex: 2,
                      my: 'auto',
                      mx: '10px',
                      boxShadow: '0 4px 4px #00000025',
                    }}
                    custom={index + 1}
                    initial='dashStart'
                    whileInView='dashAnim'
                    variants={commissionsVariants}
                  ></Box>

                  <Typography
                    component={motion.p}
                    sx={{
                      fontSize: { xs: '22px', sm: '24px' },
                      color: 'white',
                      fontWeight: 'light',
                      textShadow: '0 4px 4px #00000025',
                    }}
                    custom={index + 1}
                    initial='priceStart'
                    whileInView='sizeAnim'
                    variants={commissionsVariants}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      {width < 1200 && (
        <Box
          sx={{
            backgroundImage: 'url(/art/tree_blossoms_opaque.png)',
            backgroundSize: '100%',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '630px',
            left: '55vw',
            zIndex: 1,
            width: '600px',
            height: '1000px',
          }}
        ></Box>
      )}
      <>
        <Box
          component={motion.div}
          sx={{
            width: { md: '65vw', lg: '52vw' },
            height: { md: '65vw', lg: '52vw' },
            backgroundColor: 'rose.main',
            borderRadius: '100%',
            position: 'absolute',
            top: { md: '-3.3vw', lg: '-3vw' },
            left: { md: '-10.8vw', lg: '-9vw' },
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '100% 0px -40% 0px' }}
        ></Box>
        {dataArray.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: { md: '29.2vw', lg: '23vw' },
              left: { md: '21.7vw', lg: '17vw' },
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
              viewport={{ once: true, margin: '100% 0px -40% 0px' }}
              initial='start'
              variants={roseSunVariants}
            ></Box>
          </Box>
        ))}
      </>
    </Box>
  );
}
