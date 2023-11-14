import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B7280", // gray-500
          light: "#A3A3A3", // gray-400
          dark: "#4B5563", // gray-600
        },
        secondary: {
          DEFAULT: "#9CA3AF", // gray-400
          light: "#D1D5DB", // gray-300
          dark: "#6B7280", // gray-500
        },
        tertiary: {
          DEFAULT: "#D1D5DB", // gray-300
          light: "#E5E7EB", // gray-200
          dark: "#9CA3AF", // gray-400
        },
        confirm: {
          DEFAULT: "#10B981", // green-500
          light: "#6EE7B7", // green-300
          dark: "#064E3B", // green-800
        },
        reject: {
          DEFAULT: "#EF4444", // red-500
          light: "#FCA5A5", // red-300
          dark: "#B91C1C", // red-800
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'body': ['Open Sans']
      },
    },
  },
  plugins: [],
};
export default config;
