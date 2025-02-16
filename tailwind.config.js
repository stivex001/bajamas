/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Nunito: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },

      backgroundColor: {
        // primary: "#0064fa",
        primary: "#365F36",
        "primary-hover": "#0052cc",
      },
      backgroundImage: {
        // gradient: "linear-gradient(to bottom,var(--white),var(--primary-50))",
        authbg: "url('/authbg.png')",
        heroImg: "url('/5g_background.jpg')",
        pricebg: "url('/Bg.png')",
      },
      colors: {
        gray1: "#F7FAFC",
        primary: "#365F36",
        tertiary: "#79B078",
        secondary: "#eef0f3",
        dark: "#1d2023",
        gray2: "#CFD9E0",
        bodydark1: "#DEE4EE",
        bordergray: "#CBD5E0",
        bodydark: "#f1f5f9",
        graydark: "#171923",
        darker: "#202224",
        boxgray: "#718096",
        "boxdark-2": "#1A222C",
        stroke: "#E2E8F0",
        current: "currentColor",
        strokegray: "#c2c7d0",
        "meta-3": "#10B981",
        lightblack: "#1C2434",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
        "gray-2": "#f6f9fe",
        whiter: "#F5F7FD",
        optionvtu: "#3e196e",
      },
      boxShadow: {
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        "card-2": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        switcher:
          "0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        1: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
        3: "0px 1px 5px rgba(0, 0, 0, 0.14)",
        4: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        5: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        6: "0px 3px 15px rgba(0, 0, 0, 0.1)",
        7: "-5px 0 0 #313D4A, 5px 0 0 #313D4A",
        8: "1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)",
        boxShadow: "0px 0px 47.8px 0px #00000040",
        priceshadow: "0px 0px 10.7px 0px #00000040;",
        lightshadow: "0px 0px 4px 0px #0000001A",
      },
      dropShadow: {
        1: "0px 1px 0px #E2E8F0",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  plugins: [require("tailwindcss-animate")],
};
