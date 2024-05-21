/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      main: '#3E68FF',
      header: '#7392FF',
      white: '#ffffff',
      font: "#484848",
      lightgrey: "#D9D9D9",
      inputField: "#EBEBEB",
      tableHover: "#F9FAFB",
      red: "#EE4B2B",
      error: "#BE3C22",
      lightblue: "#D9E4FF"
    },
    borderRadius: {
      '2xl': '1rem',
      '4xl': '2rem',
    },
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    theme: {
      extend: {
        colors: {
          "primary": "#7392FF",
        },
      },
    },
  },
}

