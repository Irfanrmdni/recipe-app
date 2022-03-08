module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', 'sans-serif']
      },
      backgroundImage: {
        "hero": "url('/hero.png')",
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
      },
    },
  },
  plugins: [],
}