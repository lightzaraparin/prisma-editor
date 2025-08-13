/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Evelan GmbH Brand Colors
        edge: "#1e3a8a", // Deep blue for edges and borders
        modal: "#0f172a", // Dark slate for modals
        "brand-darker": "#0f172a", // Darkest brand color
        "brand-dark": "#1e293b", // Dark brand color
        "brand-light": "#3b82f6", // Primary blue
        "brand-lighter": "#60a5fa", // Lighter blue
        "brand-indigo-1": "#4f46e5", // Indigo accent
        "brand-indigo-2": "#6366f1", // Lighter indigo
        "brand-teal-1": "#0d9488", // Teal accent for growth
        "brand-teal-2": "#14b8a6", // Lighter teal
        "brand-blue": "#2563eb", // Primary brand blue
        // Additional Evelan colors
        "evelan-primary": "#1e40af", // Deep blue from Evelan site
        "evelan-secondary": "#64748b", // Professional gray
        "evelan-accent": "#0ea5e9", // Bright blue accent
        "evelan-success": "#059669", // Success green
        "evelan-warning": "#d97706", // Warning orange
        "evelan-error": "#dc2626", // Error red
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
