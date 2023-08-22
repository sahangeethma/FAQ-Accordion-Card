/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-pattern": "url('./images/bg-pattern-desktop.svg')",
        "main-image": "url('./images/illustration-woman-online-desktop.svg')",
        "cube-image": "url('./images/illustration-box-desktop.svg')",
        "bg-pattern-mb": "url('./images/bg-pattern-mobile.svg')",
      },
      fontFamily: {
        body: "Kumbh Sans",
      },
      colors: {
        // #### Text

        VeryDarkDesaturatedBlue: " hsl(238, 29%, 16%)",
        SoftRed: " hsl(14, 88%, 65%)",

        // #### Gradient
        // BackgroundGradient:

        SoftViolet: " hsl(273, 75%, 66%)",
        SoftBlue: "hsl(240, 73%, 65%)",

        // ### Neutral
        // #### Text

        VeryDarkGrayishBlue: " hsl(237, 12%, 33%)",
        DarkGrayishBlue: " hsl(240, 6%, 50%)",

        // #### Dividers

        LightGrayishBlue: " hsl(240, 5%, 91%)",
      },
      backgroundPosition: {
        "custom-position-pt": "left -5750% top 64%",
        "custom-position-mn": "left -750% center",
        "custom-position-cb": "left -50% center 20%",
        "custom-position-mb": "center top",
      },
      backgroundSize: {
        "custom-size-pt": "99%",
        "custom-size-mn": "98%",
      },
    },
  },
  plugins: [],
};
