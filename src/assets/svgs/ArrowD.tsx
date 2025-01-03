
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

export const BullishArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={17}
    height={12}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h17v12H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.01502 0 0 .02128 -.003 0)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={67}
        height={47}
      />
    </defs>
  </svg>
)
