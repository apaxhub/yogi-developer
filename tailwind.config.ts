import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Luxury Palette
        bg: "#0E0E0E",              // Softer than pure black
        surface: "#171717",         // Card backgrounds
        surface_light: "#1F1F1F",

        fg: "#F5F3EE",              // Warm white (more premium)
        muted: "#B3B3B3",

        // Gold Accent System
        primary: "#C6A75E",         // Premium gold
        primary_hover: "#D4B46A",
        primary_soft: "#E8D7A5",

        // Borders
        border: "rgba(255,255,255,0.08)",

        // Optional Accent Override (for future theme switch)
        accent_blue: "#0E2A47",
        accent_green: "#1F4D36",
      },

      boxShadow: {
        glow: "0 0 25px rgba(198, 167, 94, 0.35)",
        soft: "0 10px 30px rgba(0,0,0,0.25)",
      },

      animation: {
        kenburns: "kenburns 20s ease-out forwards",
        fadeUp: "fadeUp 0.8s ease forwards",
      },

      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"], // Luxury headlines
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;