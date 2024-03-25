import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#F9911F",
        colorSeconday: "#212529",
        themePrimary: {
          higher: "#808080",
          high: "#B3B3B3",
          topMedium: "#4D4D4D",
          medium: "#D6D6D6",
          low: "#CCC",
          lower:"#fff",
          lowest:"#F0F0F0",
          pink:"#DE7D90",
          lightBlue:"#75BCEB",
          blueshade:" #86D0BE",
          purple:" #9289D1"

        },
        borderPrimary: "#E0E0E0",
        gradient: {
          bgPrimary: "rgba(255, 255, 255, 0.00)",
          bgSecondry: "rgba(233, 40, 159, 0.40)",
          linerColorPrimary: "rgba(242, 194, 135, 0.35)",
        },
        gradientPrimary:
          "linear-gradient(134deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.25) 0.01%, rgba(255, 255, 255, 0.00) 100%)",
        gradientSeconday:"linear-gradient(134deg, rgba(249, 145, 31, 0.25) 0%, rgba(255, 255, 255, 0.13) 0.01%, rgba(249, 145, 31, 0.25) 100%);",
      },
      fontFamily: {
        familyPrimary: "Integral CF",
        familySecondary:"Inter"
      },
      boxShadow:{
        boxShodowPrimary: "0px 8px 24px 0px rgba(134, 134, 134, 0.25)",
        boxShadowSecondary: "4px 8px 24px 0px rgba(195, 111, 20, 0.25)"
      },
    },
    screens: {
      'mobile': {min:"320px",max: '639px' }, 
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};

export default config;
