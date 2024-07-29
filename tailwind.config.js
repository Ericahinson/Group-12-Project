/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        blue: "#000fff",
        gray: {
          "100": "#808080",
          "200": "#342121",
          "300": "#242424",
        },
        mediumblue: "#0612d2",
        black: "#000",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#ededed",
        },
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "akaya-telivigala": "'Akaya Telivigala'",
        inter: "Inter",
        montserrat: "Montserrat",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xs: "12px",
      "base-2": "16.2px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
