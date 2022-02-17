import * as React from "react"

const LandingArrow = (props) => (
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
)

export default LandingArrow