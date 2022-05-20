import React from 'react';

export default function GradientLine(props) {
  return (
    <svg
      width={211}
      height={1}
      viewBox='0 0 211 1'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <rect
        x={0.25}
        y={0.25}
        width={210.5}
        height={0.5}
        rx={0.25}
        stroke='url(#paint0_linear_227_63)'
        strokeWidth={0.5}
      />
      <defs>
        <linearGradient
          id='paint0_linear_227_63'
          x1={0}
          y1={0}
          x2={0.12053}
          y2={5.5663}
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FBFE5C' />
          <stop offset={0.50567} stopColor='#FC6BFF' />
          <stop offset={1} stopColor='white' />
        </linearGradient>
      </defs>
    </svg>
  );
}
