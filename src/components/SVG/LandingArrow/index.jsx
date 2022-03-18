import * as React from 'react';

import { useSpring, animated } from 'react-spring';

import { Box } from '@mui/material';

export default function LandingArrow (props) {

  const arrowProps = useSpring({
    loop: { reverse: true },
    from: { y: -20 },
    to: { y: 0 },
    delay: 300,
    config: { tension: 10, friction: 0 }
  });

  return (
    <animated.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...arrowProps }}>
      <svg
        width={141}
        height={47}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#a)" stroke="#fff" strokeWidth={2}>
          <path d="M135.7 1.298 70.016 37.504M5.301 1.298l65.682 36.206" />
        </g>
        <defs>
          <filter
            id="a"
            x={0.818}
            y={0.422}
            width={139.364}
            height={45.957}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_13_11" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_13_11"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </animated.div>
  )
}