/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        200: "2",
        175: "1.75",
      },
      translate: {
        "custom-1": "33rem",
        "custom-2": "30rem",
        "custom-3": "28rem",
        "custom-4": "26rem",
      },
    },
  },
  plugins: [],
};
