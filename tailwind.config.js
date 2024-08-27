const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default withMT({

  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    colors: {
      ...colors,
      primary: "#EEEEEE",
      secondary: "#000000",
      accent: "#FE0000",
      neutral: "#fdfb12",
      "base-100": "#0a0a0a",
      info: "#38bdf8",
      success: "#00ff00",
      warning: "#fde047",
      error: "#dc2626",
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
    },
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },
      // https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
      animation: {
        marquee: "marquee 36s linear infinite",
        marquee2: "marquee2 36s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      container: {
        padding: {
          DEFAULT: "0",
        },
      },
    },
  },
});
