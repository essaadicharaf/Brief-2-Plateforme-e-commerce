/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#355C4A",
          hover: "#24372D",
        },
        secondary: "#C77B4A",
        ivoire: "#FAF7F0",
        beige: "#E8E0D2",
        charbon: "#252A25",
      },
      // خاصهم يدخلو هنا داخل extend باش ما تمسحش 4, 6, 8, 56 الافتراضيين
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        full: "9999px",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
