import React from "react";

// https://pattern.monster/
// https://pattern.monster/greek-key/
// color can be in hex format (e.g. #b6b6b6) or rgba (e.g. rgba(51, 102, 153, 0.5))
const SVGBg = ({ bgColor, strokeColor }) => (
  <svg
    id="homePatternId"
    xmlns="http://www.w3.org/2000/svg"
    style={{ zIndex: "-1", width: "100%", height: "100%" }}
  >
    <defs>
      <pattern
        id="greekKey"
        patternUnits="userSpaceOnUse"
        width="62"
        height="68"
        patternTransform="scale(1) rotate(0)"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={bgColor} // background color
        />
        <path
          d="M41.845 51.072h3.465v-7.035h-7.076v13.999H52.18V37.21H31.117m0 27.79V37.21M20.389 51.07h-3.466v-7.034H24v13.999H10.055V37.21h21.062m10.728-20.283h3.465v7.035h-7.076V9.964H52.18V30.79H31.117m0-27.789v27.79M20.389 16.927h-3.466v7.035H24V9.964H10.055V30.79h21.062M3 3h56v62H3.126z"
          strokeLinecap="square"
          strokeWidth="0.5" // stoke width
          stroke={strokeColor} // stroke color
          fill="none"
        />
      </pattern>
    </defs>
    <rect
      width="800%"
      height="800%"
      transform="translate(0,0)"
      fill="url(#greekKey)"
    />
  </svg>
);

export default SVGBg;
