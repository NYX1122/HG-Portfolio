import React, { useState } from 'react';

import PieceItem from '../components/PieceItem';

import { useTrail, animated } from 'react-spring';

import { Waypoint } from 'react-waypoint';

import { Box } from '@mui/material';

export default function PiecesOne() {
  // For running animations when they come into view
  const [ visible, setVisible ] = useState(false);

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

  // Animations used to move in pieceItem components to view
  const trailList = useTrail(4, {
    from: {x: -400, opacity: 0},
    to: { x: 0, opacity: 1 },
    reverse: !visible
  });

  return (
    <Box sx={{
      marginTop: '10px'
    }}>
      {trailList.map((styles, index) => (
        <Waypoint onEnter={() => setVisible(true)} onLeave={() => setVisible(false)} key={artList[index].id}>
          <animated.div style={styles} key={artList[index].id}>
            <PieceItem
              imgName={artList[index].name}
              alt={artList[index].description}
              setVisible={setVisible}
            ></PieceItem>
          </animated.div>
        </Waypoint>
      ))}
    </Box>
  );
}