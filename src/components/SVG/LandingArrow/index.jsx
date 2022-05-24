import * as React from 'react';

import useWindowDimensions from '../../../customHooks/useWindowDimensions';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function LandingArrow(props) {
  const { width } = useWindowDimensions();

  return (
    <Box
      component={motion.div}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      transition={{
        duration: 1,
        repeatType: 'mirror',
        repeat: Infinity,
        delay: 2.5,
      }}
    >
      {width < 600 ? (
        <svg
          width={141}
          height={47}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#a)' stroke='#fff' strokeWidth={2}>
            <motion.path
              d='M135.7 1.298 70.016 37.504M5.301 1.298l65.682 36.206'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3.5, delay: 1 }}
            />
          </g>
          <defs>
            <filter
              id='a'
              x={0.818}
              y={0.422}
              width={139.364}
              height={45.957}
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity={0} result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy={4} />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
              <feBlend
                in2='BackgroundImageFix'
                result='effect1_dropShadow_13_11'
              />
              <feBlend
                in='SourceGraphic'
                in2='effect1_dropShadow_13_11'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='224'
          height='70'
          fill='none'
          viewBox='0 0 224 70'
        >
          <g stroke='#fff' strokeWidth='2' filter='url(#filter0_d_308_53)'>
            <motion.path
              d='M0 -1L122.523 -1'
              transform='scale(-1 1) rotate(28.865 -113.702 -425.019)'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.5 }}
            ></motion.path>
            <motion.path
              d='M5.182 1.209L112.483 60.356'
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.5 }}
            ></motion.path>
          </g>
          <defs>
            <filter
              id='filter0_d_308_53'
              width='222.601'
              height='68.899'
              x='0.699'
              y='0.334'
              colorInterpolationFilters='sRGB'
              filterUnits='userSpaceOnUse'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
              <feColorMatrix
                in='SourceAlpha'
                result='hardAlpha'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              ></feColorMatrix>
              <feOffset dy='4'></feOffset>
              <feGaussianBlur stdDeviation='2'></feGaussianBlur>
              <feComposite in2='hardAlpha' operator='out'></feComposite>
              <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'></feColorMatrix>
              <feBlend
                in2='BackgroundImageFix'
                result='effect1_dropShadow_308_53'
              ></feBlend>
              <feBlend
                in='SourceGraphic'
                in2='effect1_dropShadow_308_53'
                result='shape'
              ></feBlend>
            </filter>
          </defs>
        </svg>
      )}
    </Box>
  );
}
