/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  container: {
    center: true, // Automatically center the container
    padding: "1rem", // Default padding on all sides
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1120px", // Use your custom width for large screens
      xl: "1280px",
    },
  },
  plugins: [],
};
