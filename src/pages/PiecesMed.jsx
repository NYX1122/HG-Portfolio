import React, { useEffect, useRef } from 'react';

import MediumPieceItem from '../components/MediumPieceItem';

import { Box } from '@mui/material';

export default function Pieces({ scrollToPieces, setScrollToPieces }) {
  // List of art to be displayed
  const sizeControl = 1;
  const artList = [
    [
      {
        name: 'bear_dog_medium',
        description: 'A brown dog named Bear.',
        height: sizeControl * 43.95,
        width: sizeControl * 33.7,
      },
      {
        name: 'dog_field_medium',
        description: 'A dog standing in a field.',
        height: sizeControl * 49.11,
        width: sizeControl * 33.7,
      },
      {
        name: 'sixties_medium',
        description:
          'Two people from the sixties eating dinner against a red background.',
        height: sizeControl * 20.29,
        width: sizeControl * 33.7,
      },
    ],
    [
      [
        {
          name: 'girl_dog_medium',
          description: 'A little girl and a puppy soundly asleep.',
          height: sizeControl * 54.78,
          width: sizeControl * 32.26,
        },
        [
          {
            name: 'moon_medium',
            description: 'A full moon at night.',
            height: sizeControl * 28.37,
            width: sizeControl * 34.04,
          },
          {
            name: 'little_girl_medium',
            description:
              'A little girl sitting on steps surrounded by flowers.',
            height: sizeControl * 26.41,
            width: sizeControl * 34.04,
          },
        ],
      ],
      [
        {
          name: 'tattoo_medium',
          description: 'A tattoo that has flowers surrounding a compass.',
          height: sizeControl * 58.57,
          width: sizeControl * 21.52,
        },
        {
          name: 'marylin_medium',
          description: 'A portrait of marylin monroe smiling.',
          height: sizeControl * 58.56,
          width: sizeControl * 44.78,
        },
      ],
    ],
    [
      {
        name: 'cow_medium',
        description: 'A spotted cow standing in a field.',
        height: sizeControl * 67.66,
        width: sizeControl * 50.02,
      },
      {
        name: 'cat_medium',
        description: 'A cat with some pink frogs.',
        height: sizeControl * 35.74,
        width: sizeControl * 50.02,
      },
    ],
    [
      {
        name: 'candle_medium',
        description: 'A candle melting in a hand.',
        height: sizeControl * 62.98,
        width: sizeControl * 49.98,
      },

      {
        name: 'car_medium',
        description:
          'A woman leaning against a pink car in front of the delicate arch',
        height: sizeControl * 40.41,
        width: sizeControl * 49.98,
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
        zIndex: '2',
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
