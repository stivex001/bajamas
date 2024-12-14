import { SVGProps } from "react";

export function ArrowUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.9991 2.05246L10.5347 6.55027C10.8709 6.88317 11.413 6.88317 11.7491 6.55027C11.9097 6.39164 12 6.17527 12 5.9496C12 5.72393 11.9097 5.50756 11.7491 5.34893L6.60719 0.250468C6.27143 -0.0834932 5.72857 -0.0834932 5.39281 0.250468L0.250891 5.34872C0.0903188 5.50756 9.40776e-08 5.72393 7.43486e-08 5.9496C5.46197e-08 6.17527 0.0903187 6.39164 0.250891 6.55048C0.587072 6.88317 1.1292 6.88317 1.46527 6.55005L5.9991 2.05246Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 9 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.49276 9.00002L1.18951 3.69677L2.25001 2.63627L8.08351 8.46977C8.22411 8.61042 8.3031 8.80115 8.3031 9.00002C8.3031 9.19889 8.22411 9.38962 8.08351 9.53027L2.25001 15.3638L1.18951 14.3033L6.49276 9.00002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CustomArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#5C5C5C"
      strokeWidth={0.2}
      d="M9.26 19.1c5.03 0 9.107-4.074 9.107-9.1S14.289.9 9.259.9.152 4.974.152 10s4.078 9.1 9.107 9.1Z"
    />
    <path
      fill="#565656"
      d="M9.26 10.793 6.99 8.146a.387.387 0 0 0-.607 0 .56.56 0 0 0 0 .708l2.573 3c.168.195.44.195.607 0l2.573-3a.56.56 0 0 0 0-.708.387.387 0 0 0-.606 0l-2.27 2.647Z"
    />
    <mask
      id="a"
      width={7}
      height={4}
      x={6}
      y={8}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path
        fill="#fff"
        d="M9.26 10.793 6.99 8.146a.387.387 0 0 0-.607 0 .56.56 0 0 0 0 .708l2.573 3c.168.195.44.195.607 0l2.573-3a.56.56 0 0 0 0-.708.387.387 0 0 0-.606 0l-2.27 2.647Z"
      />
    </mask>
  </svg>
)
