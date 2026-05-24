import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stagger = { animate: { transition: { staggerChildren: 0.11 } } };
const fadeUp = {
  initial: { opacity: 0, y: 44 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

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

      {/* Left vertical label */}
      <div className="hero-vertical-label">Downtown Dubai · Est. 2008</div>

      {/* Main content */}
      <motion.div className="hero-content" variants={stagger} initial="initial" animate="animate">
        <motion.div variants={fadeUp} className="hero-eyebrow">
          <span className="eyebrow-pill">The World's Most Visited Destination</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="hero-title">
          The Dubai<br />
          <em>Mall</em>
        </motion.h1>

        <motion.p variants={fadeUp} className="hero-sub">
          105 million visitors. 5.4 million square feet.<br />
          The centre of the world's most ambitious city.
        </motion.p>

        <motion.div variants={fadeUp} className="hero-ctas">
          <button className="hero-btn-primary" onClick={() => onNavigate("why")}>
            Discover the Opportunity
          </button>
          <button className="hero-btn-outline" onClick={() => onNavigate("contact")}>
            Schedule a Meeting
          </button>
        </motion.div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        className="hero-stats-bar"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {[
          { v: "105M+", l: "Annual Visitors" },
          { v: "5.4M", l: "Square Feet" },
          { v: "1,300+", l: "Retail Outlets" },
          { v: "#1", l: "Most Visited on Earth" },
          { v: "2B", l: "Catchment Within 4hr Flight" },
          { v: "70%", l: "International Visitors" },
        ].map((s) => (
          <div key={s.l} className="hero-stat">
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

        .hero-video-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
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
            rgba(13,17,23,0.70) 40%,
            rgba(13,17,23,0.82) 75%,
            rgba(13,17,23,0.96) 100%
          );
        }

        .hero-vertical-label {
          position: absolute;
          left: 28px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 0.52rem;
          font-weight: 400;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(139,92,246,0.45);
          white-space: nowrap;
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px 130px;
          max-width: 900px;
        }

        .hero-eyebrow {
          margin-bottom: 24px;
        }

        .eyebrow-pill {
          display: inline-block;
          background: rgba(139,92,246,0.18);
          border: 1px solid rgba(139,92,246,0.45);
          color: #C4B5FD;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 100px;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(5rem, 11vw, 8.5rem);
          font-weight: 400;
          line-height: 1;
          color: #F8FAFC;
          margin-bottom: 28px;
          letter-spacing: -0.02em;
        }

        .hero-title em {
          font-style: italic;
          display: inline-block;
          padding-bottom: 0.08em;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(248,250,252,0.65);
          margin-bottom: 44px;
          max-width: 480px;
          letter-spacing: 0.01em;
        }

        .hero-ctas {
          display: flex;
          gap: 14px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
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
          box-shadow: 0 6px 32px rgba(139,92,246,0.5);
          transform: translateY(-2px);
        }

        .hero-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
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

        .hero-stats-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
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
          padding: 20px 20px;
          border-right: 1px solid rgba(248,250,252,0.06);
          text-align: center;
        }

        .hs-value {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 500;
          background: linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .hs-label {
          font-size: 0.52rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.38);
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .hero-content { padding: 0 24px 130px; }
          .hero-ctas { flex-direction: column; }
          .hero-stats-bar { overflow-x: auto; }
          .hero-stat { min-width: 100px; }
          .hero-vertical-label { display: none; }
        }
      `}</style>
    </div>
  );
}
