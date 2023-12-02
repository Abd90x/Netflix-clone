/** @type {import('tailwindcss').Config} */
/*eslint no-undef: "error"*/
/*eslint-env node*/
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nsans-light": ["Nsans Light"],
        "nsans-medium": ["Nsans Medium"],
        "nsans-regular": ["Nsans Regular"],
        "nsans-bold": ["Nsans Bold"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
