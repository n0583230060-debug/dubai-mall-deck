import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";

// Clip reveal: each line slides up from below
function ClipLine({ children, delay, className }) {
  return (
    <div className="clip-wrap">
      <motion.div
        className={className}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const STATS = [
  { v: <CountUp end={105} suffix="M+" />,  l: "Annual Visitors" },
  { v: <CountUp end={5.4} suffix="M" decimals={1} />, l: "Sq Ft Retail" },
  { v: <CountUp end={1300} suffix="+" />,  l: "Retail Outlets" },
  { v: "#1",                                l: "Most Visited on Earth" },
  { v: <CountUp end={2} suffix="B" />,     l: "Catchment 4hr Flight" },
  { v: <CountUp end={70} suffix="%" />,    l: "International Visitors" },
];

export default function Hero({ onNavigate }) {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="hero">

      {/* Background Video — deferred 800ms for Lighthouse */}
      <div className="hero-video-wrap">
        {videoReady && (
          <iframe
            className="hero-video"
            src="https://www.youtube.com/embed/3JtGFMHgvAo?autoplay=1&mute=1&loop=1&playlist=3JtGFMHgvAo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="The Dubai Mall"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
        <div className="hero-overlay" />
      </div>

      {/* Vertical label */}
      <motion.div
        className="hero-vertical-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Downtown Dubai · Est. 2008
      </motion.div>

      {/* Cinematic content */}
      <div className="hero-content">

        {/* Eyebrow */}
        <motion.div
          className="hero-eyebrow-line"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className="hero-eyebrow-dot" />
          The World's Most Visited Destination
        </motion.div>

        {/* Cinematic lines */}
        <div className="hero-lines">
          <ClipLine delay={0.35} className="hero-line-xl">MORE THAN</ClipLine>
          <ClipLine delay={0.55} className="hero-line-xl">
            A <em>MALL.</em>
          </ClipLine>

          <div className="hero-lines-gap" />

          <ClipLine delay={0.8} className="hero-line-lg">A Global</ClipLine>
          <ClipLine delay={0.97} className="hero-line-lg">Destination.</ClipLine>

          <div className="hero-lines-gap-sm" />

          <ClipLine delay={1.2} className="hero-line-md">
            <em>Where Brands Become Legends.</em>
          </ClipLine>
        </div>

        {/* Divider */}
        <motion.div
          className="hero-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* CTAs */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.75, duration: 0.6 }}
        >
          <button className="hero-btn-primary" onClick={() => onNavigate("why")}>
            Discover the Opportunity
          </button>
          <button className="hero-btn-outline" onClick={() => onNavigate("contact")}>
            Schedule a Meeting
          </button>
        </motion.div>

      </div>

      {/* Stats bar */}
      <motion.div
        className="hero-stats-bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.8 }}
      >
        {STATS.map((s, i) => (
          <div key={i} className="hero-stat">
            <div className="hs-value">{s.v}</div>
            <div className="hs-label">{s.l}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        .hero {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        /* ── Video ── */
        .hero-video-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #0D1117;
        }
        .hero-video {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 177.78vh;
          height: 100vh;
          min-width: 100%;
          min-height: 56.25vw;
          border: none;
          pointer-events: none;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(13,17,23,0.78) 0%,
            rgba(13,17,23,0.65) 40%,
            rgba(13,17,23,0.82) 75%,
            rgba(13,17,23,0.96) 100%
          );
        }

        /* ── Vertical label ── */
        .hero-vertical-label {
          position: absolute;
          left: 28px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 0.5rem;
          font-weight: 400;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(139,92,246,0.5);
          white-space: nowrap;
          z-index: 2;
        }

        /* ── Main content ── */
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px 130px;
          max-width: 1100px;
        }

        /* ── Eyebrow ── */
        .hero-eyebrow-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.45);
          margin-bottom: 28px;
        }
        .hero-eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #8B5CF6;
          flex-shrink: 0;
          box-shadow: 0 0 8px rgba(139,92,246,0.8);
        }

        /* ── Clip reveal wrapper ── */
        .clip-wrap {
          overflow: hidden;
          line-height: 1.0;
        }

        /* ── Text lines ── */
        .hero-line-xl {
          font-family: var(--font-display);
          font-size: clamp(3.8rem, 9vw, 7.5rem);
          font-weight: 400;
          color: #F8FAFC;
          letter-spacing: -0.02em;
          line-height: 1.0;
        }
        .hero-line-xl em {
          font-style: italic;
          background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          padding-bottom: 0.05em;
        }

        .hero-line-lg {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 400;
          color: rgba(248,250,252,0.65);
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .hero-line-md {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2.4vw, 1.9rem);
          font-weight: 400;
          line-height: 1.2;
        }
        .hero-line-md em {
          font-style: italic;
          background: linear-gradient(135deg, #8B5CF6, #C4B5FD);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
          padding-bottom: 0.06em;
        }

        .hero-lines-gap    { height: 20px; }
        .hero-lines-gap-sm { height: 10px; }

        /* ── Rule ── */
        .hero-rule {
          width: 56px;
          height: 2px;
          background: linear-gradient(to right, #8B5CF6, transparent);
          margin: 28px 0 26px;
          transform-origin: left;
        }

        /* ── CTAs ── */
        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 14px 34px;
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          box-shadow: 0 4px 24px rgba(139,92,246,0.35);
          transition: var(--transition);
        }
        .hero-btn-primary:hover {
          box-shadow: 0 6px 32px rgba(139,92,246,0.55);
          transform: translateY(-2px);
        }

        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          background: rgba(255,255,255,0.08);
          color: rgba(248,250,252,0.85);
          border: 1px solid rgba(248,250,252,0.22);
          padding: 13px 33px;
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          backdrop-filter: blur(12px);
          transition: var(--transition);
        }
        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.14);
          border-color: rgba(139,92,246,0.55);
          color: #C4B5FD;
        }

        /* ── Stats bar ── */
        .hero-stats-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          display: flex;
          background: rgba(13,17,23,0.72);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(139,92,246,0.18);
          box-shadow: 0 -4px 40px rgba(0,0,0,0.2);
        }
        .hero-stat {
          flex: 1;
          padding: 18px 16px;
          border-right: 1px solid rgba(248,250,252,0.06);
          text-align: center;
        }
        .hs-value {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 500;
          background: linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .hs-label {
          font-size: 0.48rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.35);
          margin-top: 5px;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 130px; }
          .hero-line-xl { font-size: clamp(2.8rem, 14vw, 4.5rem); }
          .hero-line-lg { font-size: clamp(1.5rem, 8vw, 2.5rem); }
          .hero-ctas { flex-direction: column; }
          .hero-ctas button { justify-content: center; }
          .hero-stats-bar { overflow-x: auto; }
          .hero-stat { min-width: 90px; padding: 14px 12px; }
          .hs-value { font-size: 1.1rem; }
          .hero-vertical-label { display: none; }
        }
      `}</style>
    </div>
  );
}
