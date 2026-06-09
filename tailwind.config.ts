import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        accent: {
          DEFAULT: "#FF6B00",
          dark: "#CC5500",
          light: "#FF8C40",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8CB6A",
          dark: "#A88A2A",
        },
        surface: {
          DEFAULT: "#141414",
          light: "#1A1A1A",
          lighter: "#222222",
        },
        muted: {
          DEFAULT: "#888888",
          light: "#B0B0B0",
          dark: "#555555",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        signature: ["var(--font-signature)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
        "accent-gradient": "linear-gradient(135deg, #FF6B00, #FF8C40)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37, #E8CB6A)",
        "dark-gradient": "linear-gradient(135deg, #141414, #0B0B0B)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-sm": "0 4px 16px rgba(0,0,0,0.4)",
        glow: "0 0 40px rgba(255,107,0,0.2), 0 0 80px rgba(255,107,0,0.08)",
        "glow-sm": "0 0 20px rgba(255,107,0,0.15)",
        "glow-gold": "0 0 30px rgba(212,175,55,0.25)",
        "glow-lg": "0 0 60px rgba(255,107,0,0.25), 0 20px 40px rgba(0,0,0,0.4)",
        card: "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(255,107,0,0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float-y 6s ease-in-out infinite",
        "float-slow": "float-y 9s ease-in-out infinite",
        "float-x": "float-x 7s ease-in-out infinite",
        shimmer: "shimmer-slide 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
