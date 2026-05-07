/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          500: "#6366f1",   // Indigo — main accent
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
        accent: {
          DEFAULT: "#f59e0b", // Amber
          light: "#fef3c7",
        },
        dark: {
          DEFAULT: "#1e1b4b",      // Deep indigo for headings & footer
          bg: "#0f172a",
          card: "#1e293b",
        }
      },
      fontFamily: {
        sans:  ['"Inter"', "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(99, 102, 241, 0.08)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
