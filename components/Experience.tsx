"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Work Experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Where I&apos;ve worked</p>
          <h2 className="section-title">Experience</h2>
          <div className="cosmos-divider" />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <div
                className="exp-card"
                style={{ position: "relative", overflow: "hidden" }}
              >
                {/* Glow accent */}
                <div style={{
                  position: "absolute", top: 0, left: 0, width: 4, bottom: 0,
                  background: "linear-gradient(to bottom, #7C3AED, #38BDF8)",
                  borderRadius: "4px 0 0 4px",
                }} aria-hidden="true" />

                <div style={{ paddingLeft: "1.25rem" }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem",
                    marginBottom: "0.875rem",
                  }}>
                    <div>
                      <h3 style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.125rem", fontWeight: 700,
                        color: "var(--cosmos-text)", marginBottom: "0.3rem",
                      }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                        <span style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.875rem", fontWeight: 600,
                          color: "var(--cosmos-purple)",
                        }}>
                          {exp.org}
                        </span>
                      </div>
                    </div>
                    <span style={{
                      display: "inline-flex", alignItems: "center",
                      padding: "0.3rem 0.875rem", borderRadius: "9999px",
                      background: "rgba(56,189,248,0.08)",
                      border: "1px solid rgba(56,189,248,0.2)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.75rem", fontWeight: 500,
                      color: "var(--cosmos-sky)", whiteSpace: "nowrap",
                    }}>
                      {exp.period}
                    </span>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {exp.achievements.map((a, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                        <span style={{
                          flexShrink: 0, marginTop: "0.45rem",
                          width: 5, height: 5, borderRadius: "50%",
                          background: "var(--cosmos-purple)",
                          boxShadow: "0 0 8px rgba(139,92,246,0.6)",
                          display: "inline-block",
                        }} aria-hidden="true" />
                        <span style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontSize: "0.9rem", color: "var(--cosmos-muted)",
                          lineHeight: 1.7,
                        }}>
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}