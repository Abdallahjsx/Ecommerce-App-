import React from "react";
import styles from "../components/layout/navbar/navbar.module.css";
import { useAppDispatch } from "@/Redux/store";
import { clearToken } from "@/Redux/slices/authSlice";
import { SvgIcon, SvgIconProps } from "@mui/material";
export function FilterIcon() {

    return (
        <SvgIcon
            viewBox="0 0 24 24"
        >
            <g clipPath="url(#clip0_1552_9044)">
                <path
                    d="M4.25067 5.61C6.57067 8.59 10.0007 13 10.0007 13V18C10.0007 19.1 10.9007 20 12.0007 20C13.1007 20 14.0007 19.1 14.0007 18V13C14.0007 13 17.4307 8.59 19.7507 5.61C20.2607 4.95 19.7907 4 18.9507 4H5.04067C4.21067 4 3.74067 4.95 4.25067 5.61Z"
                    fill="url(#paint0_linear_1552_9044)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_1552_9044"
                    x1={12.0005}
                    y1={20}
                    x2={12.0005}
                    y2={4}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#1B2351" />
                    <stop offset={1} stopColor="#47C0D2" />
                </linearGradient>
                <clipPath id="clip0_1552_9044">
                    <rect width={24} height={24} fill="white" />
                </clipPath>
            </defs>
        </SvgIcon>
    );
}
export function CloseIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            width={props.width || "20"}
            height={props.height || "20"}
            viewBox="0 0 6.6 6.7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"

        >
            <path
                d="M6.44625 0.15326C6.25125 -0.0443313 5.93625 -0.0443313 5.74125 0.15326L3.29625 2.62569L0.85125 0.148194C0.65625 -0.0493978 0.34125 -0.0493978 0.14625 0.148194C-0.04875 0.345785 -0.04875 0.664971 0.14625 0.862562L2.59125 3.34005L0.14625 5.81754C-0.04875 6.01514 -0.04875 6.33432 0.14625 6.53191C0.34125 6.72951 0.65625 6.72951 0.85125 6.53191L3.29625 4.05442L5.74125 6.53191C5.93625 6.72951 6.25125 6.72951 6.44625 6.53191C6.64125 6.33432 6.64125 6.01514 6.44625 5.81754L4.00125 3.34005L6.44625 0.862562C6.63625 0.670038 6.63625 0.345785 6.44625 0.15326Z"
                fill={fill || "#FEFEFE"}
            />
        </svg>
    );
}