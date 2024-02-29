/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:"#1C76FD",
        white:'#FFFFFF',
        white_accent:'#EBEEFF',
        overlay:'#0000004D'
      },
      fontFamily: {
        manrope: ["Manrope"],
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
      fontWeight: {
        200: 200,
        500: 500,
        300: 300,
        400: 400,
        600: 600,
      },
    },
  },
  plugins: [],
};