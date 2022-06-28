import React, { useEffect, useRef } from 'react';

import MediumPieceItem from '../components/MediumPieceItem';

import { Box, Typography } from '@mui/material';

export default function Pieces({ scrollToPieces, setScrollToPieces }) {
  // List of art to be displayed
  const artList = [
    [
      {
        name: 'bear_dog_medium',
        description: 'A brown dog named Bear.',
        height: '43.95',
        width: '33.70',
      },
      {
        name: 'dog_field_medium',
        description: 'A dog standing in a field.',
        height: '49.11',
        width: '33.70',
      },
      {
        name: 'sixties_medium',
        description:
          'Two people from the sixties eating dinner against a red background.',
        height: '20.29',
        width: '33.70',
      },
    ],
    [
      [
        {
          name: 'girl_dog_medium',
          description: 'A little girl and a puppy soundly asleep.',
          height: '54.78',
          width: '32.26',
        },
        [
          {
            name: 'moon_medium',
            description: 'A full moon at night.',
            height: '28.37',
            width: '34.04',
          },
          {
            name: 'little_girl_medium',
            description:
              'A little girl sitting on steps surrounded by flowers.',
            height: '26.41',
            width: '34.04',
          },
        ],
      ],
      [
        {
          name: 'tattoo_medium',
          description: 'A tattoo that has flowers surrounding a compass.',
          height: '58.57',
          width: '21.52',
        },
        {
          name: 'marylin_medium',
          description: 'A portrait of marylin monroe smiling.',
          height: '58.54',
          width: '44.78',
        },
      ],
    ],
    [
      {
        name: 'cow_medium',
        description: 'A spotted cow standing in a field.',
        height: '67.66',
        width: '50.02',
      },
      {
        name: 'cat_medium',
        description: 'A cat with some pink frogs.',
        height: '35.74',
        width: '50.02',
      },
    ],
    [
      {
        name: 'candle_medium',
        description: 'A candle melting in a hand.',
        height: '62.98',
        width: '49.98',
      },

      {
        name: 'car_medium',
        description:
          'A woman leaning against a pink car in front of the delicate arch',
        height: '40.41',
        width: '49.98',
      },
    ],
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
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
      }}
    >
      {artList.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {item.map((item, index) => (
                <MediumPieceItem item={item} key={index}></MediumPieceItem>
              ))}
            </Box>
          ) : index === 1 ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {item.map((item, index) => (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      {item.map((item, index) => (
                        <React.Fragment key={index}>
                          {index === 0 ? (
                            <MediumPieceItem item={item}></MediumPieceItem>
                          ) : (
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                              }}
                            >
                              {item.map((item, index) => (
                                <MediumPieceItem
                                  item={item}
                                  key={index}
                                ></MediumPieceItem>
                              ))}
                            </Box>
                          )}
                        </React.Fragment>
                      ))}
                    </Box>
                  ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      {item.map((item, index) => (
                        <MediumPieceItem
                          item={item}
                          key={index}
                        ></MediumPieceItem>
                      ))}
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {item.map((item, index) => (
                <MediumPieceItem item={item} key={index}></MediumPieceItem>
              ))}
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}
