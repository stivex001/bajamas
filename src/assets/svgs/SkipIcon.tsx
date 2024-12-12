import { SVGProps } from "react";
export const SkipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={106}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#EDF2F7"
      fillOpacity={0.3}
      d="M7 11.94 5.668 11 0 15l5.668 4L7 18.06 2.673 15 7 11.94Z"
    />
    <path
      fill="#CBD5E0"
      d="M100.332 11 99 11.94l4.327 3.06L99 18.06l1.332.94L106 15l-5.668-4Z"
    />
    <circle cx={54} cy={16} r={4} fill="#D9D9D9" />
    <circle cx={29.01} cy={15.682} r={1.858} fill="#EDF2F7" fillOpacity={0.3} />
    <circle cx={79.6} cy={15.682} r={1.858} fill="#EDF2F7" fillOpacity={0.3} />
    <mask id="a" fill="#fff">
      <path d="M45.612 8.705a11.147 11.147 0 0 0 14.685 16.377l-1.572-2.465a8.224 8.224 0 0 1-10.833-12.083l-2.28-1.83Z" />
    </mask>
    <path
      stroke="#D9D9D9"
      strokeWidth={4}
      d="M45.612 8.705a11.147 11.147 0 0 0 14.685 16.377l-1.572-2.465a8.224 8.224 0 0 1-10.833-12.083l-2.28-1.83Z"
      mask="url(#a)"
    />
  </svg>
);
