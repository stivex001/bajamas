import { SVGProps } from "react";
export const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14 9a.965.965 0 0 1-.712-.288A.973.973 0 0 1 13 8V4c0-.283.096-.52.288-.712A.972.972 0 0 1 14 3h6c.283 0 .521.096.713.288.192.192.288.43.287.712v4a.968.968 0 0 1-.288.713A.964.964 0 0 1 20 9h-6ZM4 13a.965.965 0 0 1-.712-.288A.972.972 0 0 1 3 12V4c0-.283.096-.52.288-.712A.972.972 0 0 1 4 3h6c.283 0 .521.096.713.288.192.192.288.43.287.712v8a.968.968 0 0 1-.288.713A.964.964 0 0 1 10 13H4Zm10 8a.965.965 0 0 1-.712-.288A.973.973 0 0 1 13 20v-8c0-.283.096-.52.288-.712A.973.973 0 0 1 14 11h6c.283 0 .521.096.713.288.192.192.288.43.287.712v8a.968.968 0 0 1-.288.713A.964.964 0 0 1 20 21h-6ZM4 21a.965.965 0 0 1-.712-.288A.972.972 0 0 1 3 20v-4c0-.283.096-.52.288-.712A.973.973 0 0 1 4 15h6c.283 0 .521.096.713.288.192.192.288.43.287.712v4a.968.968 0 0 1-.288.713A.964.964 0 0 1 10 21H4Z"
    />
  </svg>
);

export const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18 4H2C.9 4 .01 4.9.01 6L0 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
    />
  </svg>
);

export const SmsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M12 0C5.372 0 0 4.027 0 9c0 3.516 2.695 6.553 6.614 8.034L3.998 24l7.524-6.019c.16.005.314.019.478.019 6.628 0 12-4.027 12-9s-5.372-9-12-9Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const TemplateIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path fill="currentColor" d="M22 2H2v6h20V2Zm0 8H11v12h11V10ZM9 22V10H2v12h7Z" />
    </svg>
  )

  export const ListIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
    </svg>
  )

  export const BucketListIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M12 21.75c.845 0 7.625-3.886 7.625-8.47v-10c-2 0-7.625-1-7.625-1s-5.63 1-7.625 1v10c0 4.584 6.78 8.47 7.625 8.47Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        d="M16.545 14.884 7.61 5.95m2.95 8.505c.065-.512.155-1.021.27-1.525a.76.76 0 0 0-.14-.73c-.13-.125-.5-.5-.87-.88a7.001 7.001 0 0 1 1.315-1.82c.543-.547 1.173-1 1.865-1.34.38.37.75.735.875.865a.76.76 0 0 0 .73.14 14.5 14.5 0 0 1 1.5-.265.5.5 0 0 0 .43-.56V6.29a.37.37 0 0 0-.34-.33c-1.855-.135-3.845.905-4.22 1.115l-.05.03A8.55 8.55 0 0 0 8.79 10.25l-.055.105c-.255.465-1.225 2.385-1.09 4.18a.36.36 0 0 0 .325.335H10a.5.5 0 0 0 .56-.415Z"
      />
    </svg>
  )

  export const PricingIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6Z"
      />
      <path
        fill="currentColor"
        d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4Zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z"
      />
    </svg>
  )

  export const ApiIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 11 17 12.5 11.5 7 13 5.5c.75-.75 3.5-2 5.5 0s.75 4.75 0 5.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m21 3-2.5 2.5"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 13 7 11.5l5.5 5.5-1.5 1.5c-.75.75-3.5 2-5.5 0s-.75-4.75 0-5.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11.5 16 2-2M3 21l2.5-2.5m2.5-6 2-2"
      />
    </svg>
  )

  export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 21c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 0 1 3 19V5c0-.55.196-1.02.588-1.412A1.93 1.93 0 0 1 5 3h6c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.097.52-.288.713A.957.957 0 0 1 11 5H5v14h6c.283 0 .521.096.713.288.192.192.288.43.287.712 0 .283-.097.52-.288.713A.957.957 0 0 1 11 21H5Zm12.175-8H10a.965.965 0 0 1-.712-.288A.972.972 0 0 1 9 12c0-.283.095-.52.288-.712A.97.97 0 0 1 10 11h7.175L15.3 9.125a.918.918 0 0 1-.275-.675c0-.267.092-.5.275-.7a.95.95 0 0 1 .7-.313.943.943 0 0 1 .725.288L20.3 11.3c.2.2.3.433.3.7 0 .267-.1.5-.3.7l-3.575 3.575c-.2.2-.437.296-.712.288a1.019 1.019 0 0 1-.713-.313.97.97 0 0 1-.262-.712.984.984 0 0 1 .287-.688l1.85-1.85Z"
      />
    </svg>
  )