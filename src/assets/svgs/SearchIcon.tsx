import { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40263 12.7974 1 8.6 1C4.40263 1 1 4.40263 1 8.6C1 12.7974 4.40263 16.2 8.6 16.2Z"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.54"
        d="M16.9999 16.9999L15.3999 15.3999"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
