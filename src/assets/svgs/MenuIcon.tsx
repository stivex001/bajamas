import { SVGProps } from "react";
export const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M2.5 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75Zm0 5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 1 1 0 1.5H3.25a.75.75 0 0 1-.75-.75Zm.75 4.25a.75.75 0 1 0 0 1.5h14.5a.75.75 0 1 0 0-1.5H3.25Z"
    />
  </svg>
);
