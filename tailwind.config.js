/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    // 1. Breakpoints (Mobile-First)
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      // 2. الألوان
      colors: {
        primary: {
          DEFAULT: "#355C4A", // Vert forêt
          hover: "#24372D",
        },
        secondary: "#C77B4A", // Terracotta
        ivoire: "#FAF7F0", // Fond général
        beige: "#E8E0D2", // Surface / Borders
        charbon: "#252A25", // Texte principal
      },

      // 3. مسافات التباعد (داخل extend باش ما تمسحش باقي العبارات)
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },

      // 4. تدوير الزوايا
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        full: "9999px",
      },

      // 5. الخطوط
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};