import React, { useEffect, useRef } from 'react';

import PieceItem from '../components/PieceItem';

import { Box } from '@mui/material';

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

  //autoscroll effect
  const ref = useRef(null);
  useEffect(() => {
    if (scrollToPieces) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
      setScrollToPieces(false);
    }
  }, [scrollToPieces, setScrollToPieces]);

  return (
    <Box
      ref={ref}
      sx={{
        py: '70px',
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
  );
}
