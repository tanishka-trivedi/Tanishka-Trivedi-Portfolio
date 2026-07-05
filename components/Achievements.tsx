"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const ACH_COLORS = [
  { glow: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.25)", accent: "#8B5CF6" },
  { glow: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.25)", accent: "#38BDF8" },
  { glow: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.25)", accent: "#60A5FA" },
  { glow: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)", accent: "#A78BFA" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-label="Achievements and Leadership">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Milestones</p>
          <h2 className="section-title">Achievements</h2>
          <div className="cosmos-divider" />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}>
          {portfolioData.achievements.map((ach, i) => {
            const c = ACH_COLORS[i % ACH_COLORS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderRadius: "1.25rem", padding: "1.75rem",
                    background: "rgba(13,21,38,0.8)",
                    border: `1px solid ${c.border}`,
                    height: "100%",
                    transition: "box-shadow 0.3s ease",
                    position: "relative", overflow: "hidden",
                  }}
                  className={`ach-inner-${i}`}
                >
                  {/* Corner glow */}
                  <div style={{
                    position: "absolute", top: 0, right: 0,
                    width: 120, height: 120,
                    background: `radial-gradient(circle at 100% 0%, ${c.glow} 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }} aria-hidden="true" />

                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: "12px",
                    background: c.glow,
                    border: `1px solid ${c.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.5rem", marginBottom: "1.25rem",
                  }} aria-hidden="true">
                    {ach.icon}
                  </div>

                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem", fontWeight: 700,
                    color: "var(--cosmos-text)", marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}>
                    {ach.title}
                  </h3>

                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.875rem", color: "var(--cosmos-muted)",
                    lineHeight: 1.7,
                  }}>
                    {ach.description}
                  </p>

                  {/* Bottom accent line */}
                  <div style={{
                    position: "absolute", bottom: 0, left: "1.75rem", right: "1.75rem",
                    height: 2,
                    background: `linear-gradient(90deg, ${c.accent}55, transparent)`,
                    borderRadius: 1,
                  }} aria-hidden="true" />
                </motion.div>

                <style>{`
                  .ach-inner-${i}:hover {
                    box-shadow: 0 16px 50px ${c.glow};
                  }
                `}</style>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}