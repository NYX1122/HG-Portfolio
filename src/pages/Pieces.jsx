import React, { useState, useEffect, useCallback } from 'react';


import PieceItem from '../components/PieceItem';

import { Box } from '@mui/material';

export default function Pieces() {
  const artList = [
    {
      id: 1,
      name: 'little_girl_steps',
      description: 'A little girl sitting on stairs surrounded by flowers.',
    },
    {
      id: 2,
      name: 'marylin_monroe_portrait',
      description: 'Marylin Monroe smiling.'
    },
    {
      id: 3,
      name: 'full_moon_night',
      description: 'A full moon at night.'
    },
    {
      id: 4,
      name: 'brown_bear_dog',
      description: 'A brown dog named Bear.'
    }
  ]

  return (
    <Box sx={{
      marginTop: '10px'
    }}>
      {artList.map((image) => (
        <PieceItem
          imgName={image.name}
          alt={image.name}
          key={image.id}
        ></PieceItem>
      ))}
    </Box>
  );
}