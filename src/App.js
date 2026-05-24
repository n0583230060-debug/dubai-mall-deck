import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import FashionAvenue from "./sections/FashionAvenue";
import Attractions from "./sections/Attractions";
import Events from "./sections/Events";
import Sponsorship from "./sections/Sponsorship";
import Leasing from "./sections/Leasing";
import Contact from "./sections/Contact";
import Nav from "./components/Nav";
import AIChat from "./components/AIChat";
import "./styles.css";

const SECTIONS = [
  { id: "hero",     label: "Home" },
  { id: "why",      label: "Why Dubai Mall" },
  { id: "fashion",  label: "Fashion Avenue" },
  { id: "attractions", label: "Attractions" },
  { id: "events",   label: "Events" },
  { id: "sponsorship", label: "Sponsorship" },
  { id: "leasing",  label: "Leasing" },
  { id: "contact",  label: "Contact" },
];

export default function App() {
  const [active, setActive] = useState("hero");
  const [chatOpen, setChatOpen] = useState(false);

  const idx = SECTIONS.findIndex((s) => s.id === active);
  const next = SECTIONS[idx + 1];
  const prev = SECTIONS[idx - 1];

  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowRight" && next) setActive(next.id);
      if (e.key === "ArrowLeft"  && prev) setActive(prev.id);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [active]);

  const renderSection = () => {
    const go = setActive;
    switch (active) {
      case "hero":        return <Hero        onNavigate={go} />;
      case "why":         return <WhyUs       onNavigate={go} />;
      case "fashion":     return <FashionAvenue onNavigate={go} />;
      case "attractions": return <Attractions onNavigate={go} />;
      case "events":      return <Events      onNavigate={go} />;
      case "sponsorship": return <Sponsorship onNavigate={go} />;
      case "leasing":     return <Leasing     onNavigate={go} />;
      case "contact":     return <Contact />;
      default:            return <Hero        onNavigate={go} />;
    }
  };

  return (
    <div className="app">
      <Nav sections={SECTIONS} active={active} onNavigate={setActive} />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -28 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="section-wrapper"
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <nav className="section-nav" aria-label="Section navigation">
        {prev && (
          <button className="nav-arrow left" onClick={() => setActive(prev.id)} aria-label={`Previous: ${prev.label}`}>
            ← {prev.label}
          </button>
        )}
        {next && (
          <button className="nav-arrow right" onClick={() => setActive(next.id)} aria-label={`Next: ${next.label}`}>
            {next.label} →
          </button>
        )}
      </nav>

      {/* Dots */}
      <nav className="section-dots" aria-label="Jump to section">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={`dot ${active === s.id ? "active" : ""}`}
            onClick={() => setActive(s.id)}
            aria-label={`Go to ${s.label}`}
            aria-current={active === s.id ? "page" : undefined}
          />
        ))}
      </nav>

      {/* AI Chat */}
      <button className="chat-trigger" onClick={() => setChatOpen(true)}>
        <span className="chat-trigger-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="chat-trigger-text">Ask our Concierge</span>
        <span className="chat-trigger-arrow">→</span>
      </button>

      <AnimatePresence>
        {chatOpen && <AIChat onClose={() => setChatOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
