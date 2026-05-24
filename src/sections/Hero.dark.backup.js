import { motion } from "framer-motion";

const stagger = { animate: { transition: { staggerChildren: 0.11 } } };
const fadeUp = {
  initial: { opacity: 0, y: 44 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({ onNavigate }) {
  return (
    <div className="hero">
      {/* Background Video */}
      <div className="hero-video-wrap">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/3JtGFMHgvAo?autoplay=1&mute=1&loop=1&playlist=3JtGFMHgvAo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="The Dubai Mall"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="hero-overlay" />
        {/* Grain texture */}
        <div className="hero-grain" />
      </div>

      {/* Left vertical label */}
      <div className="hero-vertical-label">Downtown Dubai · Est. 2008</div>

      {/* Main content */}
      <motion.div className="hero-content" variants={stagger} initial="initial" animate="animate">
        <motion.div variants={fadeUp} className="hero-eyebrow">
          <span className="eyebrow-line" />
          The World's Most Visited Destination
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
          <button className="btn-primary" onClick={() => onNavigate("why")}>
            Discover the Opportunity
          </button>
          <button className="btn-outline" onClick={() => onNavigate("contact")}>
            Schedule a Meeting
          </button>
        </motion.div>
      </motion.div>

      {/* Stats ticker */}
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
            to top,
            rgba(15,23,42,0.98) 0%,
            rgba(15,23,42,0.55) 38%,
            rgba(15,23,42,0.2) 65%,
            rgba(15,23,42,0.5) 100%
          );
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
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
          color: rgba(139,92,246,0.5);
          white-space: nowrap;
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px 120px;
          max-width: 860px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.6rem;
          font-weight: 400;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 22px;
        }

        .eyebrow-line {
          display: block;
          width: 32px;
          height: 1px;
          background: var(--gold);
          flex-shrink: 0;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(5rem, 11vw, 8.5rem);
          font-weight: 400;
          line-height: 0.92;
          color: var(--white);
          margin-bottom: 28px;
          letter-spacing: -0.01em;
        }

        .hero-title em {
          font-style: italic;
          color: var(--gold);
        }

        .hero-sub {
          font-size: 1rem;
          font-weight: 200;
          line-height: 1.75;
          color: var(--white-dim);
          margin-bottom: 40px;
          max-width: 480px;
          letter-spacing: 0.02em;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
        }

        .hero-stats-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 3;
          display: flex;
          border-top: 1px solid rgba(139,92,246,0.15);
          background: rgba(15,23,42,0.85);
          backdrop-filter: blur(20px);
        }

        .hero-stat {
          flex: 1;
          padding: 18px 20px;
          border-right: 1px solid rgba(139,92,246,0.1);
          text-align: center;
        }

        .hs-value {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--gold);
          line-height: 1;
        }

        .hs-label {
          font-size: 0.52rem;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--white-dim);
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
