"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// Subtle numbered accent per card
const CARD_ACCENTS = [
  { from: "rgba(124,58,237,0.6)", to: "rgba(56,189,248,0.4)" },
  { from: "rgba(56,189,248,0.6)", to: "rgba(139,92,246,0.4)" },
  { from: "rgba(96,165,250,0.6)", to: "rgba(124,58,237,0.4)" },
];

export default function Projects() {
  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">What I&apos;ve built</p>
          <h2 className="section-title">Projects</h2>
          <div className="cosmos-divider" />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {portfolioData.projects.map((proj, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: "easeOut" }}
              >
                <div
                  className="project-card"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{
                    height: 2,
                    background: `linear-gradient(90deg, ${accent.from}, ${accent.to}, transparent)`,
                  }} aria-hidden="true" />

                  <div style={{
                    padding: "2rem",
                    display: "grid",
                    gridTemplateColumns: isEven ? "1fr auto" : "auto 1fr",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                    className="proj-inner"
                  >
                    {/* Number */}
                    <div style={{ order: isEven ? 2 : 0 }} className="proj-num-wrap">
                      <span style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "4rem", fontWeight: 800, lineHeight: 1,
                        background: `linear-gradient(135deg, ${accent.from}, transparent)`,
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        userSelect: "none",
                        opacity: 0.35,
                        display: "block",
                        minWidth: 60,
                        textAlign: "center",
                      }} aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ order: isEven ? 1 : 2 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.875rem", flexWrap: "wrap" }}>
                        <div>
                          <h3 style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.2rem", fontWeight: 700,
                            color: "var(--cosmos-text)", marginBottom: "0.25rem",
                          }}>
                            {proj.name}
                          </h3>
                          <span style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.75rem", color: "var(--cosmos-muted)",
                          }}>
                            {proj.period}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          {proj.github && (
                            <a
                              href={proj.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-icon"
                              aria-label={`${proj.name} GitHub repository`}
                            >
                              <GitHubIcon />
                            </a>
                          )}
                          {proj.demo && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-icon"
                              aria-label={`${proj.name} live demo`}
                            >
                              <ExternalIcon />
                            </a>
                          )}
                        </div>
                      </div>

                      <p style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.9rem", color: "var(--cosmos-muted)",
                        lineHeight: 1.75, marginBottom: "1.25rem",
                      }}>
                        {proj.description}
                      </p>

                      {/* Metrics */}
                      <div style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.4rem 0.9rem", borderRadius: "0.5rem",
                        background: "rgba(56,189,248,0.07)",
                        border: "1px solid rgba(56,189,248,0.18)",
                        marginBottom: "1.25rem",
                      }}>
                        <span style={{ fontSize: "0.7rem", color: "var(--cosmos-sky)" }} aria-hidden="true">✦</span>
                        <span style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.775rem", fontWeight: 500,
                          color: "var(--cosmos-sky)",
                        }}>
                          {proj.metrics}
                        </span>
                      </div>

                      {/* Tech stack */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        {proj.tech.map((t) => (
                          <span key={t} className="tech-badge">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .proj-inner { grid-template-columns: 1fr !important; }
          .proj-num-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}