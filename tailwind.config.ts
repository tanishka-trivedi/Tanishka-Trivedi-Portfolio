import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          bg: "#020617",
          surface: "#0F172A",
          card: "#0d1526",
          violet: "#7C3AED",
          purple: "#8B5CF6",
          sky: "#38BDF8",
          blue: "#60A5FA",
          text: "#E2E8F0",
          muted: "#94A3B8",
          border: "rgba(139,92,246,0.2)",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "shooting-star": "shootingStar 3s linear infinite",
        "gradient-x": "gradientX 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139,92,246,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(139,92,246,0.6)" },
        },
        shootingStar: {
          "0%": { transform: "translateX(0) translateY(0)", opacity: "1" },
          "100%": { transform: "translateX(300px) translateY(200px)", opacity: "0" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   darkMode: "class",
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         display: ["'Syne'", "sans-serif"],
//         body: ["'DM Sans'", "sans-serif"],
//         mono: ["'JetBrains Mono'", "monospace"],
//       },
//       colors: {
//         brand: {
//           green: "#4ade80",
//           teal: "#2dd4bf",
//           amber: "#fbbf24",
//         },
//         dark: {
//           900: "#0a0a0f",
//           800: "#111118",
//           700: "#16161f",
//           600: "#1e1e2a",
//           500: "#252535",
//           400: "#2e2e42",
//         },
//       },
//       animation: {
//         "fade-up": "fadeUp 0.6s ease forwards",
//         "fade-in": "fadeIn 0.5s ease forwards",
//         "pulse-slow": "pulse 3s ease-in-out infinite",
//         float: "float 6s ease-in-out infinite",
//         shimmer: "shimmer 2.5s linear infinite",
//       },
//       keyframes: {
//         fadeUp: {
//           "0%": { opacity: "0", transform: "translateY(30px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         fadeIn: {
//           "0%": { opacity: "0" },
//           "100%": { opacity: "1" },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-12px)" },
//         },
//         shimmer: {
//           "0%": { backgroundPosition: "-200% 0" },
//           "100%": { backgroundPosition: "200% 0" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
