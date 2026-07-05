"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const CATEGORY_META: Record<string, { icon: string; color: string; borderColor: string }> = {
  "Languages": {
    icon: "{ }",
    color: "rgba(139,92,246,1)",
    borderColor: "rgba(139,92,246,0.3)",
  },
  "AI / ML": {
    icon: "⬡",
    color: "rgba(56,189,248,1)",
    borderColor: "rgba(56,189,248,0.3)",
  },
  "Frameworks & Libraries": {
    icon: "◈",
    color: "rgba(96,165,250,1)",
    borderColor: "rgba(96,165,250,0.3)",
  },
  "Tools & Platforms": {
    icon: "⚙",
    color: "rgba(167,139,250,1)",
    borderColor: "rgba(167,139,250,0.3)",
  },
  "CS Fundamentals": {
    icon: "∑",
    color: "rgba(52,211,153,1)",
    borderColor: "rgba(52,211,153,0.3)",
  },
};

export default function Skills() {
  const entries = Object.entries(portfolioData.skills);

  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I work with</p>
          <h2 className="section-title">Skills</h2>
          <div className="cosmos-divider" />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {entries.map(([category, items], i) => {
            const meta = CATEGORY_META[category] ?? {
              icon: "◆",
              color: "rgba(139,92,246,1)",
              borderColor: "rgba(139,92,246,0.3)",
            };

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" }}
              >
                <div
                  style={{
                    borderRadius: "1.25rem",
                    padding: "1.75rem",
                    background: "rgba(13,21,38,0.75)",
                    border: `1px solid ${meta.borderColor}`,
                    height: "100%",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="skill-card"
                >
                  {/* Subtle top-left glow */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 80,
                    background: `radial-gradient(ellipse at 30% 0%, ${meta.color.replace("1)", "0.06)")} 0%, transparent 80%)`,
                    pointerEvents: "none",
                  }} aria-hidden="true" />

                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: "8px",
                      background: meta.color.replace("1)", "0.12)"),
                      border: `1px solid ${meta.borderColor}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1rem", color: meta.color,
                      fontWeight: 700,
                    }} aria-hidden="true">
                      {meta.icon}
                    </div>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.9rem", fontWeight: 600,
                      color: "var(--cosmos-text)",
                    }}>
                      {category}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          display: "inline-flex", alignItems: "center",
                          padding: "0.3rem 0.75rem", borderRadius: "9999px",
                          background: meta.color.replace("1)", "0.07)"),
                          border: `1px solid ${meta.borderColor}`,
                          color: meta.color,
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.78rem", fontWeight: 500,
                          transition: "all 0.2s",
                          cursor: "default",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
}