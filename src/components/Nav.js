import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav({ sections, active, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="main-nav">
        <div className="nav-logo">
          <span className="nav-logo-main">The Dubai Mall</span>
          <span className="nav-logo-sub">Emaar Properties · Downtown Dubai</span>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {sections
            .filter((s) => !(active === "hero" && s.id === "why"))
            .map((s) => (
              <li key={s.id}>
                <button
                  className={active === s.id ? "active" : ""}
                  onClick={() => navigate(s.id)}
                >
                  {s.label}
                </button>
              </li>
            ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {sections.filter((s) => !(active === "hero" && s.id === "why")).map((s, i) => (
              <motion.button
                key={s.id}
                className={`nav-mobile-item ${active === s.id ? "active" : ""}`}
                onClick={() => navigate(s.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <span className="nav-mobile-num">0{i + 1}</span>
                {s.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
