import React, { useRef, useEffect } from 'react';

import PieceItem from '../components/PieceItem';
import ParallaxLayer from '../components/ParallaxLayer';

import { Box } from '@mui/material';

import useWindowDimensions from '../customHooks/useWindowDimensions';

import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Pieces({ scrollToPieces, setScrollToPieces }) {
  // List of art to be displayed
  const artList = [
    {
      id: 1,
      name: 'little_girl_steps',
      description: 'A little girl sitting on stairs surrounded by flowers.',
    },
    {
      id: 2,
      name: 'marylin_monroe_portrait',
      description: 'Marylin Monroe smiling.',
    },
    {
      id: 3,
      name: 'full_moon_night',
      description: 'A full moon at night.',
    },
    {
      id: 4,
      name: 'brown_bear_dog',
      description: 'A brown dog named Bear.',
    },
    {
      id: 5,
      name: 'cow_mountain_field',
      description: 'A bull standing in a field.',
    },
    {
      id: 6,
      name: 'candle_melting_hand',
      description: 'A candle metling in the palm of a hand.',
    },
    {
      id: 7,
      name: 'black_pitbull_dog',
      description: 'A black pitbull.',
    },
    {
      id: 8,
      name: 'lady_pink_car',
      description: 'A woman laying on a pink car in the grand canyon.',
    },
  ];

  //parallax effects
  const { width } = useWindowDimensions();
  const { scrollYProgress } = useViewportScroll();
  const scrollRange = [0, 0.25];
  const movementRange = [300, -500];

  const y = useTransform(scrollYProgress, scrollRange, movementRange);

  const ref = useRef(null);

  //auto scroll
  useEffect(() => {
    if (scrollToPieces) {
      const { top } = ref.current.getBoundingClientRect();
      const adjustedTop = Math.sign(top) === 1 ? top / 2.6 : top / 1.02;
      window.scrollBy({ top: adjustedTop, left: 0, behavior: 'smooth' });
      setScrollToPieces(false);
    }
  }, [scrollToPieces, setScrollToPieces]);

  return (
    <Box
      component={motion.div}
      sx={{ position: 'relative', zIndex: '5' }}
      animate={{ y: 0 }}
      style={{ y, scrollYProgress }}
    >
      <Box
        ref={ref}
        sx={{
          my: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: '2',
        }}
      >
        {artList.map((item, index) => (
          <Box key={index}>
            <PieceItem
              imgName={item.name}
              identifier={index}
              alt={item.description}
            ></PieceItem>
          </Box>
        ))}
      </Box>
      {width >= 900 && (
        <ParallaxLayer
          scrollRange={[0, 0.17]}
          movementRange={[600, -600]}
          color={'rose.main'}
          height={'900px'}
          top={0}
          zIndex={'1'}
        ></ParallaxLayer>
      )}
    </Box>
  );
}
