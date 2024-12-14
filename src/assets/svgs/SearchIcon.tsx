import { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <g
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      opacity={0.5}
    >
      <path
        d="M9.78 12.535a5.369 5.369 0 0 0 2.844-7.043A5.377 5.377 0 0 0 5.575 2.65a5.369 5.369 0 0 0-2.844 7.043 5.377 5.377 0 0 0 7.049 2.842Z"
        clipRule="evenodd"
      />
      <path d="m11.478 11.39 4.169 4.166" />
    </g>
  </svg>
  );
}
