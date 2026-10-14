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
};
