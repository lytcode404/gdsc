/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navigation: "#fff",
        heading: "#2c3e50",
        subHeading: "#2c3e50",
        para: "#2c3e50",
        btn: "#5a4098",
        btnHoverr: "#EDEDE1",
        btnBodr: "#5a4098",
        btnTxt: "#fff",
        link: "#2c3e50",
        card: "#CACAC5",
        card2: "#EDEDE9",
        cardBodr: "#EDEDE1",
        line: "#EDEDE1",
        line2: "#2c3e50",
        line3: "#EDEDE1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
