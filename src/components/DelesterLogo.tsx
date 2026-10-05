import { SVGProps } from "react";
import clsx from "clsx";

export function DelesterLogo(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            width="350"
            height="87"
            fill="none"
            viewBox="0 0 350 87"
            className={clsx("group", props.className)}
            aria-labelledby="delester-logo-title"
        >
            <title id="delester-logo-title">Delester</title>
            <g clipPath="url(#clip0_342_66)">
                <mask
                    id="mask0_342_66"
                    style={{ maskType: "alpha" }}
                    width="500"
                    height="118"
                    x="-5"
                    y="-31"
                    maskUnits="userSpaceOnUse"
                >
                    <g className="transition-transform duration-500 ease-in-out group-hover:translate-y-[80%]">
                        <path
                            fill="currentColor"
                            className="animate-slide-left"
                            d="M45.3-31C24.9-31.7 15.9-26.6 0-16.4V87h500V-16.5l-4 1.7A74 74 0 0 1 297.3-7c-11.9-.3-24.7-5.7-38-11.3-14-5.9-28.6-12-43-12.6-20.4-.9-29.4 4.2-45.3 14.4l-4 1.7A74 74 0 0 1 126.3-7c-11.9-.3-24.7-5.7-38-11.3-14-5.9-28.6-12-43-12.6Z"
                        ></path>
                    </g>
                </mask>
                <g fill="currentColor" mask="url(#mask0_342_66)">
                    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="60" fontWeight="900" fontFamily="sans-serif">
                        delester
                    </text>
                </g>
                <mask id="path-3-inside-1_342_66" fill="#fff">
                    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="60" fontWeight="900" fontFamily="sans-serif">
                        delester
                    </text>
                </mask>
                <text 
                    x="50%" 
                    y="60%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    fontSize="60" 
                    fontWeight="900" 
                    fontFamily="sans-serif"
                    stroke="currentColor"
                    strokeWidth="4"
                    mask="url(#path-3-inside-1_342_66)"
                >
                    delester
                </text>
            </g>
            <defs>
                <clipPath id="clip0_342_66">
                    <path fill="currentColor" d="M0 0h350v87H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}
