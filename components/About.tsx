"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const INTERESTS = ["Computer Vision", "NLP", "Quantitative ML", "Open Source", "Competitive Programming"];
const RESEARCH = ["Pattern Recognition", "Stochastic Processes", "LLMs & RAG", "Quantum Information"];

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Tanishka Trivedi">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Who I am</p>
          <h2 className="section-title">About</h2>
          <div className="cosmos-divider" />
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>

          {/* Intro card */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            style={{ gridColumn: "span 2" }}
            className="about-full"
          >
            <div className="glass" style={{ borderRadius: "1.25rem", padding: "2rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", flexWrap: "wrap" }}>
                {/* Avatar placeholder with initials */}
                <div style={{
                  width: 72, height: 72, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, #7C3AED, #38BDF8)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "white",
                }}>
                  TT
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.25rem", fontWeight: 600, color: "var(--cosmos-text)", marginBottom: "0.75rem" }}>
                    Tanishka Trivedi
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "var(--cosmos-muted)", lineHeight: 1.75, maxWidth: 580 }}>
                    Pre-Final B.Tech student at <span style={{ color: "var(--cosmos-purple)", fontWeight: 500 }}>IIT Jodhpur</span>, building at the intersection of machine learning and real-world systems. I work on problems where intelligent models drive tangible outcomes — from real-time computer vision pipelines to quantitative financial models and NLP summarization engines.
                  </p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "var(--cosmos-muted)", lineHeight: 1.75, marginTop: "0.75rem" }}>
                    Currently contributing to open source while deepening expertise in deep learning, RAG systems, and ML-driven decision making.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/*Education*/}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          >
            <div className="glass" style={{ borderRadius: "1.25rem", padding: "1.75rem", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.25rem" }} aria-hidden="true">🎓</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--cosmos-text)" }}>Education</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {portfolioData.education.map((edu, i) => (
                  <div key={i} style={{ borderLeft: "2px solid rgba(139,92,246,0.3)", paddingLeft: "1rem" }}>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "var(--cosmos-text)", marginBottom: "0.2rem" }}>
                      {edu.institution}
                    </p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "var(--cosmos-muted)", marginBottom: "0.2rem" }}>
                      {edu.degree}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.25rem" }}>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "var(--cosmos-purple)" }}>{edu.period}</span>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", color: "var(--cosmos-sky)", fontWeight: 600 }}>{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          >
            <div className="glass" style={{ borderRadius: "1.25rem", padding: "1.75rem", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.25rem" }} aria-hidden="true">✦</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--cosmos-text)" }}>Interests</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.75rem" }}>
                {INTERESTS.map((item) => (
                  <span key={item} className="skill-badge">{item}</span>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.25rem" }} aria-hidden="true">🔬</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--cosmos-text)" }}>Research Areas</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {RESEARCH.map((item) => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Coursework */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            style={{ gridColumn: "span 2" }}
            className="about-full"
          >
            <div className="glass" style={{ borderRadius: "1.25rem", padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.25rem" }} aria-hidden="true">📚</span>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, color: "var(--cosmos-text)" }}>Relevant Coursework</h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {portfolioData.coursework.map((course) => (
                  <span key={course} style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "0.35rem 0.9rem", borderRadius: "0.5rem",
                    background: "rgba(15,23,42,0.6)", border: "1px solid rgba(96,165,250,0.18)",
                    color: "var(--cosmos-blue)", fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif",
                    transition: "all 0.2s",
                  }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { .about-full { grid-column: span 1 !important; } }
      `}</style>
    </section>
  );
}