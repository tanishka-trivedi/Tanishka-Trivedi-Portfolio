"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ position: "fixed", top: "1.25rem", left: 0, right: 0, zIndex: 100, display: "flex", justifyContent: "center" }}
      aria-label="Main navigation"
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          background: scrolled ? "rgba(15,23,42,0.85)" : "rgba(15,23,42,0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(139,92,246,0.2)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            background: "linear-gradient(135deg, #8B5CF6, #38BDF8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textDecoration: "none",
            marginRight: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          TT
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "0.125rem" }} className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" style={{ padding: "0.375rem 0.875rem" }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="show-mobile"
          style={{
            background: "none",
            border: "none",
            color: "var(--cosmos-text)",
            cursor: "pointer",
            padding: "0.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span style={{ width: 22, height: 2, background: "currentColor", borderRadius: 1, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none", display: "block" }} />
          <span style={{ width: 22, height: 2, background: "currentColor", borderRadius: 1, opacity: menuOpen ? 0 : 1, transition: "all 0.3s", display: "block" }} />
          <span style={{ width: 22, height: 2, background: "currentColor", borderRadius: 1, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none", display: "block" }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "calc(100% + 0.5rem)",
              left: "1rem",
              right: "1rem",
              borderRadius: "1rem",
              background: "rgba(15,23,42,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(139,92,246,0.25)",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{ padding: "0.625rem 0.75rem", borderRadius: "0.5rem" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) { .hidden-mobile { display: none !important; } }
        @media (min-width: 641px) { .show-mobile { display: none !important; } }
      `}</style>
    </motion.header>
  );
}