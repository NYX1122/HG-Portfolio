import React, { useEffect, useRef } from 'react';

import MediumPieceItem from '../components/MediumPieceItem';

import { Box } from '@mui/material';

import useWindowSize from '../customHooks/useWindowSize';

export default function Pieces({ scrollToPieces, setScrollToPieces }) {
  const { width } = useWindowSize();
  // List of art to be displayed
  const sizeControl = 0.99;
  const artList =
    width < 1200
      ? [
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
        ]
      : [
          [
            [
              [
                {
                  name: 'girl_dog_large',
                  description: 'A little girl and a puppy soundly asleep.',
                  height: sizeControl * 40.95,
                  width: sizeControl * 23.83,
                },
                {
                  name: 'shepherd_medium',
                  description: 'A black german shepherd.',
                  height: sizeControl * 36.2,
                  width: sizeControl * 23.83,
                },
                {
                  name: 'cow_medium',
                  description: 'A spotted cow standing in a field.',
                  height: sizeControl * 32.23,
                  width: sizeControl * 23.83,
                },
                {
                  name: 'moon_medium',
                  description: 'A full moon at night.',
                  height: sizeControl * 16.21,
                  width: sizeControl * 23.83,
                },
              ],
              [
                {
                  name: 'smoking_medium',
                  description: 'A woman smoking a cigarrette with a long pipe.',
                  height: sizeControl * 28.52,
                  width: sizeControl * 23.24,
                },
                {
                  name: 'tattoo_medium',
                  description:
                    'A tattoo that has flowers surrounding a compass.',
                  height: sizeControl * 63.28,
                  width: sizeControl * 23.24,
                },
                {
                  name: 'puppy_medium',
                  description: 'A puppy sitting on a sidewalk.',
                  height: sizeControl * 33.79,
                  width: sizeControl * 23.24,
                },
              ],
            ],
            {
              name: 'cat_large',
              description: 'A cat with some pink frogs.',
              height: sizeControl * 36.07,
              width: sizeControl * 47.07,
            },
          ],
          [
            [
              {
                name: 'horse_medium',
                description: 'A brown horse.',
                height: sizeControl * 37.17,
                width: sizeControl * 26.5,
              },
              {
                name: 'red_car_medium',
                description:
                  'A woman in a red polkadot dress standing in front of a car.',
                height: sizeControl * 37.17,
                width: sizeControl * 26.43,
              },
            ],
            {
              name: 'marylin_large',
              description: 'A portrait of marylin monroe smiling.',
              height: sizeControl * 71.68,
              width: sizeControl * 52.93,
            },
            {
              name: 'candle_medium',
              description: 'A candle melting in a hand.',
              height: sizeControl * 52.8,
              width: sizeControl * 52.93,
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
        justifyContent: 'left',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: '2',
      }}
    >
      {width < 1200 ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <React.Fragment>
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
                    <React.Fragment key={index}>
                      {index === 0 ? (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {item.map((item, index) => (
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                              }}
                              key={index}
                            >
                              {item.map((item, index) => (
                                <MediumPieceItem
                                  item={item}
                                  key={index}
                                ></MediumPieceItem>
                              ))}
                            </Box>
                          ))}
                        </Box>
                      ) : (
                        index === 1 && (
                          <MediumPieceItem
                            item={item}
                            key={index}
                          ></MediumPieceItem>
                        )
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
                    <React.Fragment key={index}>
                      {index === 0 ? (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {item.map((item, index) => (
                            <MediumPieceItem
                              item={item}
                              key={index}
                            ></MediumPieceItem>
                          ))}
                        </Box>
                      ) : (
                        index > 0 && (
                          <MediumPieceItem
                            item={item}
                            key={index}
                          ></MediumPieceItem>
                        )
                      )}
                    </React.Fragment>
                  ))}
                </Box>
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      )}
    </Box>
  );
}
