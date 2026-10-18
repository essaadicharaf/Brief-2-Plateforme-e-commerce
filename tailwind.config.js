/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
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
                    DEFAULT: "var(--color-primary)",
                    hover: "#24372D",
                },
                secondary: "var(--color-secondary)",
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                text: "var(--color-text)",
            },
            fontFamily: {
                heading: ["var(--font-heading)", "sans-serif"],
                body: ["var(--font-body)", "sans-serif"],
            },
            fontSize: {
                small: "var(--font-size-small)",
                body: "var(--font-size-body)",
                heading: "var(--font-size-heading)",
            },
            spacing: {
                sm: "var(--spacing-sm)",
                md: "var(--spacing-md)",
                lg: "var(--spacing-lg)",
                xl: "var(--spacing-xl)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
            },
        },
    },
    plugins: [],
=======
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
>>>>>>> feature/panier/right-section-styling
};
