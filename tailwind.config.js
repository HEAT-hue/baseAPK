/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'inline': '20px',
      },
      fontFamily: {
        "AeonikTrial-Light": ["AeonikTrial-Light"],
        "AeonikTrial-Regular": ["AeonikTrial-Regular"],
        "AeonikTrial-Bold": ["AeonikTrial-Bold"],
        "Inter-Thin": ["Inter-Thin"],
        "Inter-Extralight": ["Inter-Extralight"],
        "Inter-Light": ["Inter-Light"],
        "Inter-Regular": ["Inter-Regular"],
        "Inter-Medium": ["Inter-Medium"],
        "Inter-Bold": ["Inter-Bold"],
        "Inter-Extrabold": ["Inter-Extrabold"],
        "Inter-Black": ["Inter-Black"],
      },
      colors: {
        pry: "#F5B601",
        sec: "#6801F5",
        lightBlack: "#46474A",
        brandColor: "#E1AE3C",
        lightGreen: "#c2f19e",
        SideNav: "#f4f8fa",
        lighterGreen: "#E1FCCF",
        DirtyFreen: "#EEEEEE",
        grey: "#C3B9B9",
        darkBg: "#212121",
        inputFieldBg: "#F7F9FB",
        greyText: "#AFAFAF",
        placeholder: "#C3B9B9",
        lightYellow: "#FFB800",
        error: "#C93636",
        lightRed: "#C93636",
        darkGrey: "#A6B29D",
        disabled: "#A6B29D",
        formDisabledBg: "#A6B29D",
        pendingStatus: "#FFB800"
      },
    },
  },
  plugins: [],
}