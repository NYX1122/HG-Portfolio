import React, { useState } from 'react';

import PieceItem from '../components/PieceItem';

import { useTrail, animated } from 'react-spring';

import { Waypoint } from 'react-waypoint';

import { Box } from '@mui/material';

export default function PiecesTwo() {
  // For running animations when they come into view
  const [ visible, setVisible ] = useState(false);

  // List of art to be displayed
  const artList = [
    {
      id: 5,
      name: 'cow_mountain_field',
      description: 'A bull standing in a field.'
    },
    {
      id: 6,
      name: 'candle_melting_hand',
      description: 'A candle metling in the palm of a hand.'
    },
    {
      id: 7,
      name: 'black_pitbull_dog',
      description: 'A black pitbull.'
    },
    {
      id: 8,
      name: 'lady_pink_car',
      description: 'A woman laying on a pink car in the grand canyon.'
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