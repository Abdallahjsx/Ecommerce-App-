import React from "react";
import styles from "../components/layout/navbar/navbar.module.css";
import { useAppDispatch } from "@/Redux/store";
import { clearToken } from "@/Redux/slices/authSlice";
import { SvgIcon, SvgIconProps } from "@mui/material";
export function FilterIcon(props: SvgIconProps) {
    const id = React.useId().replace(/:/g, "");
    return (
        <SvgIcon
            viewBox="0 0 24 24"
            {...props}
        >
            <g clipPath={`url(#clip0_1552_9044_${id})`}>
                <path
                    d="M4.25067 5.61C6.57067 8.59 10.0007 13 10.0007 13V18C10.0007 19.1 10.9007 20 12.0007 20C13.1007 20 14.0007 19.1 14.0007 18V13C14.0007 13 17.4307 8.59 19.7507 5.61C20.2607 4.95 19.7907 4 18.9507 4H5.04067C4.21067 4 3.74067 4.95 4.25067 5.61Z"
                    fill={`url(#paint0_linear_1552_9044_${id})`}
                />
            </g>
            <defs>
                <linearGradient
                    id={`paint0_linear_1552_9044_${id}`}
                    x1={12.0005}
                    y1={20}
                    x2={12.0005}
                    y2={4}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#1B2351" />
                    <stop offset={1} stopColor="#47C0D2" />
                </linearGradient>
                <clipPath id={`clip0_1552_9044_${id}`}>
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
export function CheckIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg  {...props}
            width={props.width || "13"}
            height={props.height || "10"} viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.87938 7.62187L1.27688 5.01937C0.984375 4.72687 0.511875 4.72687 0.219375 5.01937C-0.073125 5.31187 -0.073125 5.78437 0.219375 6.07687L3.35438 9.21188C3.64688 9.50438 4.11938 9.50438 4.41188 9.21188L12.3469 1.27687C12.6394 0.984375 12.6394 0.511875 12.3469 0.219375C12.0544 -0.073125 11.5819 -0.073125 11.2894 0.219375L3.87938 7.62187Z" fill={fill || "#FEFEFE"} />
        </svg>

    );
}
export function SearchIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    const id = React.useId().replace(/:/g, "");
    return (
        <svg width={props.width || "18"}
            height={props.height || "18"} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6675 14.6675H15.6142L15.2408 14.3075C16.8408 12.4408 17.6675 9.89417 17.2142 7.1875C16.5875 3.48083 13.4942 0.520834 9.76083 0.0675008C4.12083 -0.625832 -0.625833 4.12083 0.0675008 9.76083C0.520834 13.4942 3.48083 16.5875 7.1875 17.2142C9.89417 17.6675 12.4408 16.8408 14.3075 15.2408L14.6675 15.6142V16.6675L20.3342 22.3342C20.8808 22.8808 21.7742 22.8808 22.3208 22.3342C22.8675 21.7875 22.8675 20.8942 22.3208 20.3475L16.6675 14.6675ZM8.6675 14.6675C5.3475 14.6675 2.6675 11.9875 2.6675 8.6675C2.6675 5.3475 5.3475 2.6675 8.6675 2.6675C11.9875 2.6675 14.6675 5.3475 14.6675 8.6675C14.6675 11.9875 11.9875 14.6675 8.6675 14.6675Z" fill={`url(#paint0_linear_3160_8519_${id})`} />
            <defs>
                <linearGradient id={`paint0_linear_3160_8519_${id}`} x1="11.3654" y1="0" x2="11.3654" y2="22.7442" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#47C0D2" />
                    <stop offset="1" stopColor="#1B2351" />
                </linearGradient>
            </defs>
        </svg>


    );
}
export function ArrowDownIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={props.width || "8"}
            height={props.height || "5"} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.296477 1.71L2.88648 4.3C3.27648 4.69 3.90648 4.69 4.29648 4.3L6.88648 1.71C7.51648 1.08 7.06648 0 6.17648 0H0.996477C0.106477 0 -0.333523 1.08 0.296477 1.71Z" fill={fill || "#323232"} />
        </svg>



    );
}
export function CartIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={props.width || "27"}
            height={props.height || "27"} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 21.3333C6.53333 21.3333 5.34667 22.5333 5.34667 24C5.34667 25.4667 6.53333 26.6667 8 26.6667C9.46667 26.6667 10.6667 25.4667 10.6667 24C10.6667 22.5333 9.46667 21.3333 8 21.3333ZM0 1.33333C0 2.06667 0.6 2.66667 1.33333 2.66667H2.66667L7.46667 12.7867L5.66667 16.04C4.69333 17.8267 5.97333 20 8 20H22.6667C23.4 20 24 19.4 24 18.6667C24 17.9333 23.4 17.3333 22.6667 17.3333H8L9.46667 14.6667H19.4C20.4 14.6667 21.28 14.12 21.7333 13.2933L26.5067 4.64C27 3.76 26.36 2.66667 25.3467 2.66667H5.61333L4.72 0.76C4.50667 0.293333 4.02667 0 3.52 0H1.33333C0.6 0 0 0.6 0 1.33333ZM21.3333 21.3333C19.8667 21.3333 18.68 22.5333 18.68 24C18.68 25.4667 19.8667 26.6667 21.3333 26.6667C22.8 26.6667 24 25.4667 24 24C24 22.5333 22.8 21.3333 21.3333 21.3333Z" fill={fill || "#FEFEFE"} />
        </svg>




    );
}
export function GridIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width || "17"}
            height={props.height || "17"}
            viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0H1.66667C0.75 0 0 0.75 0 1.66667V15C0 15.9167 0.75 16.6667 1.66667 16.6667H15C15.9167 16.6667 16.6667 15.9167 16.6667 15V1.66667C16.6667 0.75 15.9167 0 15 0ZM5 15H2.5C2.04167 15 1.66667 14.625 1.66667 14.1667V11.6667H5V15ZM5 10H1.66667V6.66667H5V10ZM5 5H1.66667V2.5C1.66667 2.04167 2.04167 1.66667 2.5 1.66667H5V5ZM10 15H6.66667V11.6667H10V15ZM10 10H6.66667V6.66667H10V10ZM10 5H6.66667V1.66667H10V5ZM14.1667 15H11.6667V11.6667H15V14.1667C15 14.625 14.625 15 14.1667 15ZM15 10H11.6667V6.66667H15V10ZM15 5H11.6667V1.66667H14.1667C14.625 1.66667 15 2.04167 15 2.5V5Z" fill={fill || "#FEFEFE"} />
        </svg>
    );
}
export function SortIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    const id = React.useId().replace(/:/g, "");
    return (
        <svg
            width={props.width || "18"}
            height={props.height || "12"}
            viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12H5C5.55 12 6 11.55 6 11C6 10.45 5.55 10 5 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12ZM0 1C0 1.55 0.45 2 1 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0H1C0.45 0 0 0.45 0 1ZM1 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7Z" fill={`url(#paint0_linear_1562_12231_${id})`} />
            <defs>
                <linearGradient id={`paint0_linear_1562_12231_${id}`} x1="18" y1="6" x2="0" y2="6" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1B2351" />
                    <stop offset="1" stopColor="#47C0D2" />
                </linearGradient>
            </defs>
        </svg>

    );
}

export function ListIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={props.width || "18"}
            height={props.height || "12"}
            viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.866025 5.19615C1.34234 5.19615 1.73205 4.80644 1.73205 4.33013C1.73205 3.85381 1.34234 3.4641 0.866025 3.4641C0.389711 3.4641 0 3.85381 0 4.33013C0 4.80644 0.389711 5.19615 0.866025 5.19615ZM0.866025 8.66025C1.34234 8.66025 1.73205 8.27054 1.73205 7.79423C1.73205 7.31791 1.34234 6.9282 0.866025 6.9282C0.389711 6.9282 0 7.31791 0 7.79423C0 8.27054 0.389711 8.66025 0.866025 8.66025ZM0.866025 1.73205C1.34234 1.73205 1.73205 1.34234 1.73205 0.866025C1.73205 0.389711 1.34234 0 0.866025 0C0.389711 0 0 0.389711 0 0.866025C0 1.34234 0.389711 1.73205 0.866025 1.73205ZM4.33013 5.19615H14.7224C15.1987 5.19615 15.5885 4.80644 15.5885 4.33013C15.5885 3.85381 15.1987 3.4641 14.7224 3.4641H4.33013C3.85381 3.4641 3.4641 3.85381 3.4641 4.33013C3.4641 4.80644 3.85381 5.19615 4.33013 5.19615ZM4.33013 8.66025H14.7224C15.1987 8.66025 15.5885 8.27054 15.5885 7.79423C15.5885 7.31791 15.1987 6.9282 14.7224 6.9282H4.33013C3.85381 6.9282 3.4641 7.31791 3.4641 7.79423C3.4641 8.27054 3.85381 8.66025 4.33013 8.66025ZM3.4641 0.866025C3.4641 1.34234 3.85381 1.73205 4.33013 1.73205H14.7224C15.1987 1.73205 15.5885 1.34234 15.5885 0.866025C15.5885 0.389711 15.1987 0 14.7224 0H4.33013C3.85381 0 3.4641 0.389711 3.4641 0.866025ZM0.866025 5.19615C1.34234 5.19615 1.73205 4.80644 1.73205 4.33013C1.73205 3.85381 1.34234 3.4641 0.866025 3.4641C0.389711 3.4641 0 3.85381 0 4.33013C0 4.80644 0.389711 5.19615 0.866025 5.19615ZM0.866025 8.66025C1.34234 8.66025 1.73205 8.27054 1.73205 7.79423C1.73205 7.31791 1.34234 6.9282 0.866025 6.9282C0.389711 6.9282 0 7.31791 0 7.79423C0 8.27054 0.389711 8.66025 0.866025 8.66025ZM0.866025 1.73205C1.34234 1.73205 1.73205 1.34234 1.73205 0.866025C1.73205 0.389711 1.34234 0 0.866025 0C0.389711 0 0 0.389711 0 0.866025C0 1.34234 0.389711 1.73205 0.866025 1.73205ZM4.33013 5.19615H14.7224C15.1987 5.19615 15.5885 4.80644 15.5885 4.33013C15.5885 3.85381 15.1987 3.4641 14.7224 3.4641H4.33013C3.85381 3.4641 3.4641 3.85381 3.4641 4.33013C3.4641 4.80644 3.85381 5.19615 4.33013 5.19615ZM4.33013 8.66025H14.7224C15.1987 8.66025 15.5885 8.27054 15.5885 7.79423C15.5885 7.31791 15.1987 6.9282 14.7224 6.9282H4.33013C3.85381 6.9282 3.4641 7.31791 3.4641 7.79423C3.4641 8.27054 3.85381 8.66025 4.33013 8.66025ZM3.4641 0.866025C3.4641 1.34234 3.85381 1.73205 4.33013 1.73205H14.7224C15.1987 1.73205 15.5885 1.34234 15.5885 0.866025C15.5885 0.389711 15.1987 0 14.7224 0H4.33013C3.85381 0 3.4641 0.389711 3.4641 0.866025Z" fill={fill || "#1E1E1E"} />
        </svg>

    );
}

export function LeftArrowIcon({ fill, width, height, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={width || "11"}
            height={height || "19"}
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M10.3725 0.3675C9.8825 -0.1225 9.0925 -0.1225 8.6025 0.3675L0.2925 8.6775C-0.0975 9.0675 -0.0975 9.6975 0.2925 10.0875L8.6025 18.3975C9.0925 18.8875 9.8825 18.8875 10.3725 18.3975C10.8625 17.9075 10.8625 17.1175 10.3725 16.6275L3.1325 9.3775L10.3825 2.1275C10.8625 1.6475 10.8625 0.8475 10.3725 0.3675Z" fill={fill || "#FEFEFE"} />
        </svg>
    );
}

export function RightArrowIcon({ fill, width, height, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={width || "11"}
            height={height || "19"}
            viewBox="0 0 11 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M0.369687 0.3675C0.859687 -0.1225 1.64969 -0.1225 2.13969 0.3675L10.4497 8.6775C10.8397 9.0675 10.8397 9.6975 10.4497 10.0875L2.13969 18.3975C1.64969 18.8875 0.859687 18.8875 0.369687 18.3975C-0.120313 17.9075 -0.120313 17.1175 0.369687 16.6275L7.60969 9.3775L0.359689 2.1275C-0.120311 1.6475 -0.120313 0.8475 0.369687 0.3675Z" fill={fill || "#FEFEFE"} />
        </svg>
    );
}
export function CalendarIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 2.5C1.23478 2.5 0.98043 2.60536 0.792893 2.79289C0.605357 2.98043 0.5 3.23478 0.5 3.5V12.5C0.5 12.7652 0.605357 13.0196 0.792893 13.2071C0.98043 13.3946 1.23478 13.5 1.5 13.5H12.5C12.7652 13.5 13.0196 13.3946 13.2071 13.2071C13.3946 13.0196 13.5 12.7652 13.5 12.5V3.5C13.5 3.23478 13.3946 2.98043 13.2071 2.79289C13.0196 2.60536 12.7652 2.5 12.5 2.5H10.5" stroke="#1B2351" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 0.5V4.5" stroke="#1B2351" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.5 0.5V4.5" stroke="#1B2351" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.5 2.5H8.5" stroke="#1B2351" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.5 8H4.5" stroke="#1B2351" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 5.5V10.5" stroke="#1B2351" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}
export function AddIcon({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5781 23.1544C17.8332 23.2924 23.0158 18.3335 23.1538 12.0784C23.2917 5.82337 18.3329 0.640768 12.0778 0.50278C5.8227 0.364791 0.640091 5.32367 0.502103 11.5787C0.364114 17.8338 5.323 23.0164 11.5781 23.1544Z" stroke="#1B2351" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9434 6.60107L11.7127 17.0557" stroke="#1B2351" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.60156 11.7134L17.0562 11.944" stroke="#1B2351" strokeLinecap="round" strokeLinejoin="round" />
        </svg>


    );
}
export function PhoneIcon({ fill, color, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.3668 13.3594C15.7465 12.7344 14.2441 11.8223 13.5152 11.4547C12.566 10.9766 12.4879 10.9375 11.7418 11.4918C11.2441 11.8617 10.9133 12.1922 10.3309 12.068C9.74844 11.9437 8.48281 11.2434 7.37461 10.1387C6.26641 9.03398 5.52539 7.73164 5.40078 7.15117C5.27617 6.5707 5.61211 6.24375 5.97852 5.74492C6.49492 5.0418 6.45586 4.92461 6.01445 3.97539C5.67031 3.23711 4.73164 1.74883 4.1043 1.13164C3.4332 0.46875 3.4332 0.585938 3.00078 0.765625C2.82476 0.839685 2.65249 0.921634 2.48397 1.01147C2.31546 1.10131 2.1514 1.19865 1.9918 1.30352C1.3668 1.71875 1.01992 2.06367 0.777344 2.58203C0.534766 3.10039 0.425781 4.31562 1.67852 6.59141C2.93125 8.86719 3.81016 10.0309 5.6293 11.8449C7.44844 13.659 8.84727 14.6344 10.8922 15.7812C13.4219 17.198 14.3922 16.9219 14.9121 16.6797C15.432 16.4375 15.7785 16.0937 16.1945 15.4688C16.2997 15.3094 16.3972 15.1456 16.4873 14.9773C16.5773 14.8089 16.6594 14.6368 16.7336 14.4609C16.9137 14.0301 17.0309 14.0301 16.3668 13.3594Z" stroke={color || "#136EBF"} strokeWidth="1.25" />
        </svg>



    );
}
export function QuestionMarkIcon({ fill, color, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_11380)">
                <mask id="mask0_1_11380" style={{ "maskType": "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="white" />
                </mask>
                <g mask="url(#mask0_1_11380)">
                    <path d="M10 3.125C8.10152 3.125 6.48107 3.79621 5.13864 5.13864C3.79621 6.48107 3.125 8.10152 3.125 10C3.125 11.8985 3.79621 13.5189 5.13864 14.8614C6.48107 16.2038 8.10152 16.875 10 16.875C11.8985 16.875 13.5189 16.2038 14.8614 14.8614C16.2038 13.5189 16.875 11.8985 16.875 10C16.875 8.10152 16.2038 6.48107 14.8614 5.13864C13.5189 3.79621 11.8985 3.125 10 3.125Z" stroke={color || "#136EBF"} strokeWidth="1.25" />
                    <path d="M7.8125 7.90195C7.8125 7.90195 7.84531 7.21836 8.57695 6.62969C9.01094 6.28008 9.53125 6.17891 10 6.17188C10.427 6.16641 10.8082 6.23711 11.0363 6.3457C11.427 6.53164 12.1875 6.98555 12.1875 7.95078C12.1875 8.96641 11.5234 9.42773 10.7668 9.93516C10.0102 10.4426 9.80469 10.9934 9.80469 11.5625" stroke={color || "#136EBF"} strokeWidth="1.09375" strokeLinecap="round" />
                    <circle cx="9.76562" cy="13.5938" r="0.78125" fill={color || "#136EBF"} />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_11380">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>




    );
}
export function TimerIcon2({ fill, color, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_11342)">
                <mask id="mask0_1_11342" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                    <rect width="16" height="16" fill="white" />
                </mask>
                <g mask="url(#mask0_1_11342)">
                    <path d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z" stroke={color || "#1B2351"} />
                    <path d="M8 4V8.5H11" stroke={color || "#1B2351"} strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_11342">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>



    );
}
export function GradientCloseIcon({ fill, color, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.625 2.1875L2.1875 0.625L6.25 4.6875L10.3125 0.625L11.875 2.1875L7.8125 6.25L11.875 10.3125L10.3125 11.875L6.25 7.8125L2.1875 11.875L0.625 10.3125L4.6875 6.25L0.625 2.1875Z" fill="url(#paint0_linear_1_11992)" stroke="url(#paint1_linear_1_11992)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_1_11992" x1="0.625" y1="6.25" x2="11.875" y2="6.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1B2351" />
                    <stop offset="1" stop-color="#47C0D2" />
                </linearGradient>
                <linearGradient id="paint1_linear_1_11992" x1="0.625" y1="6.25" x2="11.875" y2="6.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#1B2351" />
                    <stop offset="1" stop-color="#47C0D2" />
                </linearGradient>
            </defs>
        </svg>




    );
}
export function CheckedIcon({ fill, color, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill={fill}/>
        </svg>




    );
}