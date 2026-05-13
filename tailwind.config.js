/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065"
        },
        navy: {
          50:  "#f4f6fb",
          100: "#e6eaf3",
          200: "#c2cbe1",
          300: "#94a1c5",
          400: "#6573a3",
          500: "#455187",
          600: "#363f6c",
          700: "#293057",
          800: "#1b2042",
          900: "#0f1330",
          950: "#070a1f"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "float":   "float 6s ease-in-out infinite",
        "gradient": "gradient 8s ease infinite",
        "marquee": "marquee 40s linear infinite",
        "pulse-ring": "pulseRing 2.4s cubic-bezier(0.4,0,0.6,1) infinite"
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        fadeUp:  { "0%": { opacity: 0, transform: "translateY(20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        float:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-15px)" } },
        gradient:{ "0%,100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        pulseRing: { "0%,100%": { transform: "scale(1)", opacity: 0.7 }, "50%": { transform: "scale(1.25)", opacity: 0 } }
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #070a1f 0%, #1b2042 35%, #4c1d95 75%, #7c3aed 100%)"
      }
    }
  },
  plugins: []
};
