import React, { useRef, useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { motion } from 'framer-motion';

export default function Commissions({
  scrollToCommissions,
  setScrollToCommissions,
}) {
  //Map data
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

  //Autoscroll effect
  const ref = useRef(null);
  useEffect(() => {
    if (scrollToCommissions) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
      setScrollToCommissions(false);
    }
  }, [scrollToCommissions, setScrollToCommissions]);

  //animation variants
  const variants = {
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: { xs: 'rain.main', sm: 'rose.main' },
        backgroundImage: 'url(/art/tree_blossoms.png)',
        backgroundSize: { xs: '160%', sm: '95%' },
        backgroundPosition: { xs: '53% 120%', sm: '50% 160%' },
        backgroundRepeat: 'no-repeat',
        py: '70px',
        position: 'relative',
        zIndex: 2,
      }}
      ref={ref}
    >
      <Typography
        component={motion.h1}
        sx={{
          fontSize: { xs: '30px', sm: '34px' },
          color: 'malachite.main',
          fontWeight: 'light',
          textShadow: '0 4px 4px #00000025',
          textAlign: 'center',
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
            variants={variants}
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
            variants={variants}
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
                  variants={variants}
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
                  variants={variants}
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
                  variants={variants}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
