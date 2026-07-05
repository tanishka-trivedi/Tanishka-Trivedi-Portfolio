"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid rgba(139,92,246,0.1)",
        padding: "2rem 0",
      }}
      aria-label="Footer"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: "1rem",
          }}
        >
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.875rem", fontWeight: 700,
            background: "linear-gradient(135deg, #8B5CF6, #38BDF8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Tanishka Trivedi
          </div>

          <p style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.8rem", color: "var(--cosmos-muted)",
            textAlign: "center",
          }}>
            © {year} · Built with Next.js & ✦
          </p>

          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {[
              { href: "https://github.com/tanishka-trivedi", label: "GitHub", icon: "GitHub" },
              { href: "https://www.linkedin.com/in/tanishka-trivedi-84845a331", label: "LinkedIn", icon: "LinkedIn" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.75rem", fontWeight: 600,
                  color: "var(--cosmos-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cosmos-purple)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cosmos-muted)")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}