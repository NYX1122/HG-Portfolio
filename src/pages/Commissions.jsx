import React, { useRef, useEffect } from 'react';

import ParallaxLayer from '../components/ParallaxLayer';

import { Box, Typography } from '@mui/material';

// import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Commissions() {
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
  // const { scrollYProgress } = useViewportScroll();
  // const scrollRange = [0.75, 1];
  // const movementRange = [400, 0];

  // const y = useTransform(scrollYProgress, scrollRange, movementRange);

  // const ref = useRef(null);

  // useEffect(() => {
  //   if (scrollToAbout) {
  //     const { top } = ref.current.getBoundingClientRect();
  //     window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
  //     setScrollToAbout(false);
  //     toggleMenu();
  //   }
  // }, [scrollToAbout, setScrollToAbout, toggleMenu]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rain.main',
        backgroundImage: 'url(/art/tree_blossoms.png)',
        backgroundSize: '160%',
        backgroundPosition: '53% 120%',
        backgroundRepeat: 'no-repeat',
        py: '30px',
      }}
    >
      <Typography
        sx={{
          fontSize: 36,
          color: 'malachite.main',
          fontWeight: 'light',
          textShadow: '0 4px 4px #00000025',
          textAlign: 'center',
          mb: '20px',
        }}
      >
        Commissions
      </Typography>
      {sectionData.map((item, index) => (
        <Box key={index}>
          <Typography
            sx={{
              fontWeight: 'light',
              color: 'white',
              fontSize: '36px',
              textShadow: '0 4px 4px #00000025',
              ml: '19px',
            }}
          >
            {item.title}
          </Typography>
          <Box
            sx={{
              backgroundColor: '#00000015',
              borderRadius: '25px',
              px: '19px',
              py: '10px',
            }}
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
                  sx={{
                    textAlign: 'left',
                    fontSize: '24px',
                    color: 'white',
                    textShadow: '0 4px 4px #00000025',
                  }}
                >
                  {index === 0 ? 'Small' : index === 1 ? 'Medium' : 'Large'}
                </Typography>

                <Box
                  sx={{
                    height: '2px',
                    backgroundColor: 'white',
                    flex: 2,
                    my: 'auto',
                    mx: '10px',
                    boxShadow: '0 4px 4px #00000025',
                  }}
                ></Box>

                <Typography
                  sx={{
                    fontSize: '24px',
                    color: 'white',
                    fontWeight: 'light',
                    textShadow: '0 4px 4px #00000025',
                  }}
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
