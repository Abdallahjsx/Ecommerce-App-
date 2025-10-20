import React from "react";
export default function QuestionMarkIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_532_3429)">
        <mask
          id="mask0_532_3429"
     
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <rect width="20" height="20" fill="white" />
        </mask>
        <g mask="url(#mask0_532_3429)">
          <path
            d="M10 3.125C8.10152 3.125 6.48107 3.79621 5.13864 5.13864C3.79621 6.48107 3.125 8.10152 3.125 10C3.125 11.8985 3.79621 13.5189 5.13864 14.8614C6.48107 16.2038 8.10152 16.875 10 16.875C11.8985 16.875 13.5189 16.2038 14.8614 14.8614C16.2038 13.5189 16.875 11.8985 16.875 10C16.875 8.10152 16.2038 6.48107 14.8614 5.13864C13.5189 3.79621 11.8985 3.125 10 3.125Z"
            stroke={color}
            strokeWidth="1.25"
          />
          <path
            d="M7.8125 7.90195C7.8125 7.90195 7.84531 7.21836 8.57695 6.62969C9.01094 6.28008 9.53125 6.17891 10 6.17188C10.427 6.16641 10.8082 6.23711 11.0363 6.3457C11.427 6.53164 12.1875 6.98555 12.1875 7.95078C12.1875 8.96641 11.5234 9.42773 10.7668 9.93516C10.0102 10.4426 9.80469 10.9934 9.80469 11.5625"
            stroke={color}
            strokeWidth="1.09375"
            strokeLinecap="round"
          />
          <circle cx="9.76562" cy="13.5938" r="0.78125" fill={color} />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_532_3429">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
