import daisyui from "daisyui";
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myPrimary: "#0069FF",
        mySecondery: "#463AA2",
      },
    },
  },
  daisyui: {
    themes: ["winter", "sunset"],
  },
  plugins: [daisyui],
});
