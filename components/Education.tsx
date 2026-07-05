"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const NODE_COLORS = [
  {
    dot: "#7C3AED",
    glow: "rgba(124,58,237,0.55)",
    scoreText: "#8B5CF6",
    scoreBg: "rgba(124,58,237,0.14)",
    scoreBorder: "rgba(124,58,237,0.38)",
    entryBg: "rgba(124,58,237,0.07)",
    entryBorder: "rgba(124,58,237,0.22)",
  },
  {
    dot: "#60A5FA",
    glow: "rgba(96,165,250,0.5)",
    scoreText: "#60A5FA",
    scoreBg: "rgba(96,165,250,0.12)",
    scoreBorder: "rgba(96,165,250,0.32)",
    entryBg: "rgba(15,23,42,0.3)",
    entryBorder: "rgba(255,255,255,0.05)",
  },
  {
    dot: "#38BDF8",
    glow: "rgba(56,189,248,0.5)",
    scoreText: "#38BDF8",
    scoreBg: "rgba(56,189,248,0.12)",
    scoreBorder: "rgba(56,189,248,0.32)",
    entryBg: "rgba(15,23,42,0.3)",
    entryBorder: "rgba(255,255,255,0.05)",
  },
];