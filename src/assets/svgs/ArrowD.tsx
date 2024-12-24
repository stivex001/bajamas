
import { SVGProps } from "react";

export const ArrowD = () => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.26294 5.66895L7.97544 9.38145L11.6879 5.66895"
        stroke="#02050A"
        strokeWidth="1.2375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevDropdownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={17}
    fill="none"
    {...props}
  >
    <path fill="#33354D" d="m7.999 11.384 4.666-5.334H3.332l4.667 5.334Z" />
  </svg>
);

export const ArrowLeft = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.222412 14.5461C0.222412 6.5125 6.73491 0 14.7685 -1.89857e-10C22.802 -2.94712e-10 29.3145 6.5125 29.3145 14.5461C29.3145 22.5796 22.802 29.0921 14.7685 29.0921C6.73491 29.0921 0.222412 22.5796 0.222412 14.5461Z"
        fill="#F3F2F7"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.7031 14.3516L17.7982 19.4494L18.7333 18.5147L14.573 14.3521L18.7356 10.1931L17.8009 9.25658L12.7031 14.3516Z"
        fill="#CDCDCD"
      />
    </svg>
  );
};
export const ArrowRight = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.906982"
        width="29.0921"
        height="29.0921"
        rx="14.5461"
        fill="#F3F2F7"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.8408 14.3516L13.7458 19.4494L12.8106 18.5147L16.971 14.3521L12.8084 10.1931L13.743 9.25658L18.8408 14.3516Z"
        fill="#1C1C1C"
      />
    </svg>
  );
};
