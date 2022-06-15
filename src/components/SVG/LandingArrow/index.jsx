import * as React from 'react';

import useWindowSize from '../../../customHooks/useWindowSize';

import { Box } from '@mui/material';

import { motion } from 'framer-motion';

export default function LandingArrow(props) {
  const { width } = useWindowSize();

  const widthVar = width >= 600 ? 150 : 120;
  const heightVar = (47 * widthVar) / 141;
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
      <svg
        width={widthVar}
        height={heightVar}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 141 47'
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
    </Box>
  );
}
