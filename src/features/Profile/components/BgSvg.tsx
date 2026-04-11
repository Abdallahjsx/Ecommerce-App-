import * as React from "react";
const BgSvg= (props:any) => (
  <svg
    width={1440}
    height={1252}
    viewBox="0 0 1440 1252"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.1}
      d="M569.061 558.203C437.878 913.664 307.706 1170.22 166.33 1251.49L-470.513 1120.39C107.322 1183.87 419.883 684.767 580.139 371.53C708.343 120.94 1250.51 32.1857 1434.72 0.000114309L1577.53 254.936C938.42 184.014 702.409 196.877 569.061 558.203Z"
      fill="url(#paint0_linear_1623_12633)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1623_12633"
        x1={8.87159}
        y1={787.296}
        x2={790.019}
        y2={210.149}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#47C0D2" stopOpacity={0.2} />
        <stop offset={1} stopColor="#47C0D2" stopOpacity={0.9} />
      </linearGradient>
    </defs>
  </svg>
);
export default BgSvg;
