import { motion } from "framer-motion";

const f = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

// ── CHANGE IMAGE FILENAMES HERE — just replace the filename, design stays the same ──
const IMAGES = {
  mallHero: '/assets/enjoytheworld-dubai-4044191_1920.jpg',
  global:   '/assets/enjoytheworld-dubai-4044191_1920.jpg',
  crowd:    '/assets/enjoytheworld-dubai-4044191_1920.jpg',
  fashion:  '/assets/enjoytheworld-dubai-4044191_1920.jpg',
  attract:  '/assets/enjoytheworld-dubai-4044191_1920.jpg',
};
// ─────────────────────────────────────────────────────────────────────────────────────

const CARDS = [
  { img: IMAGES.global,  stat: "2B",     label: "People Reachable",       sub: "Within a 4-Hour Flight" },
  { img: IMAGES.crowd,   stat: "70%",    label: "International Visitors",  sub: "From 190+ Countries" },
  { img: IMAGES.fashion, stat: "200+",   label: "Luxury Brands",          sub: "At Fashion Avenue" },
  { img: IMAGES.attract, stat: "4hr+",   label: "Average Dwell Time",     sub: "Unmatched Brand Exposure" },
];

const SOURCE_MARKETS = [
  { country: "UAE",            pct: 30 },
  { country: "Saudi Arabia",   pct: 22 },
  { country: "India",          pct: 14 },
  { country: "United Kingdom", pct: 9  },
  { country: "United States",  pct: 8  },
  { country: "Russia",         pct: 7  },
  { country: "China",          pct: 6  },
];

export default function WhyUs({ onNavigate }) {
  return (
    <div className="section why-section">

      {/* ── Header ── */}
      <motion.div {...f(0)} className="section-label">Why The Dubai Mall</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        The Centre<br />of <em>Everything.</em>
      </motion.h2>
      <motion.p {...f(0.14)} className="why-intro">
        Not a shopping centre — a global destination. 105 million visitors a year.
        The most visited place on Earth.
      </motion.p>

      {/* ── Hero split: big image + anchor stat ── */}
      <motion.div {...f(0.2)} className="why-hero">
        <div
          className="why-hero-img"
          style={{ backgroundImage: `url(${IMAGES.mallHero})` }}
        >
          <div className="why-hero-overlay" />
        </div>
        <div className="why-hero-stat">
          <div className="whs-eyebrow">Annual Visitors</div>
          <div className="whs-number">105<span>M+</span></div>
          <div className="whs-rule" />
          <p className="whs-body">
            More visitors than the Eiffel Tower, Times Square, and Disney World — combined.
            Your brand, at the centre of the world.
          </p>
        </div>
      </motion.div>

      {/* ── 4 image cards ── */}
      <div className="why-cards">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="why-card"
          >
            <div
              className="wc-img"
              style={{ backgroundImage: `url(${c.img})` }}
            >
              <div className="wc-img-overlay" />
            </div>
            <div className="wc-body">
              <div className="wc-stat">{c.stat}</div>
              <div className="wc-label">{c.label}</div>
              <div className="wc-sub">{c.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom: source markets + CTA ── */}
      <div className="why-bottom">
        <div className="source-markets">
          <div className="sm-label">Top Visitor Source Markets</div>
          <div className="sm-bars">
            {SOURCE_MARKETS.map((m, i) => (
              <motion.div
                key={m.country}
                className="sm-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.06 }}
              >
                <div className="sm-country">{m.country}</div>
                <div className="sm-bar-wrap">
                  <motion.div
                    className="sm-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${m.pct * 3}%` }}
                    transition={{ delay: 0.6 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className="sm-pct">{m.pct}%</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div {...f(0.6)} className="why-cta-box">
          <div className="wcta-title">Ready to be part of this?</div>
          <p className="wcta-body">
            AED 850+ median spend per visit. 4+ hours average dwell time.
            The audience is already here — waiting for your brand.
          </p>
          <button className="why-btn-primary" onClick={() => onNavigate("fashion")}>
            Explore Fashion Avenue →
          </button>
        </motion.div>
      </div>

      <style>{`
        .why-section {
          background: #F8FAFC;
          overflow: hidden;
        }

        .why-intro {
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.7;
          color: #475569;
          max-width: 560px;
          margin-bottom: 36px;
          letter-spacing: 0.01em;
        }

        /* ── Hero split ── */
        .why-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          height: 380px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 20px;
          box-shadow: 0 4px 40px rgba(15,23,42,0.10);
        }

        .why-hero-img {
          position: relative;
          background-size: cover;
          background-position: center;
        }
        .why-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 50%, rgba(248,250,252,0.15) 100%);
        }

        .why-hero-stat {
          background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px 48px;
        }

        .whs-eyebrow {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #A78BFA;
          margin-bottom: 12px;
        }

        .whs-number {
          font-family: var(--font-display);
          font-size: clamp(4rem, 7vw, 6rem);
          font-weight: 400;
          line-height: 1;
          color: #fff;
          margin-bottom: 20px;
        }
        .whs-number span {
          font-size: 0.5em;
          background: linear-gradient(135deg, #8B5CF6, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .whs-rule {
          width: 40px;
          height: 2px;
          background: linear-gradient(to right, #8B5CF6, transparent);
          margin-bottom: 20px;
        }

        .whs-body {
          font-size: 0.82rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(248,250,252,0.65);
          max-width: 280px;
        }

        /* ── 4 cards (2x2 grid) ── */
        .why-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }

        .why-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(139,92,246,0.12);
          box-shadow: 0 2px 16px rgba(15,23,42,0.06);
          transition: var(--transition);
        }
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(139,92,246,0.15);
          border-color: rgba(139,92,246,0.35);
        }

        .wc-img {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .wc-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(15,23,42,0.35) 100%);
        }

        .wc-body {
          padding: 20px 18px 22px;
        }

        .wc-stat {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 400;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 8px;
        }

        .wc-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: #0F172A;
          margin-bottom: 4px;
          letter-spacing: 0.01em;
        }

        .wc-sub {
          font-size: 0.68rem;
          font-weight: 300;
          color: #64748B;
        }

        /* ── Bottom row ── */
        .why-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: start;
        }

        .source-markets {
          background: #fff;
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 10px;
          padding: 28px 24px;
          box-shadow: 0 2px 16px rgba(15,23,42,0.05);
        }

        .sm-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #7C3AED;
          margin-bottom: 18px;
        }

        .sm-bars { display: flex; flex-direction: column; gap: 9px; }

        .sm-row {
          display: grid;
          grid-template-columns: 110px 1fr 36px;
          align-items: center;
          gap: 12px;
        }

        .sm-country {
          font-size: 0.72rem;
          font-weight: 400;
          color: #374151;
        }

        .sm-bar-wrap {
          height: 3px;
          background: rgba(15,23,42,0.07);
          border-radius: 99px;
          overflow: hidden;
        }

        .sm-bar {
          height: 100%;
          background: linear-gradient(to right, #8B5CF6, #A78BFA);
          border-radius: 99px;
        }

        .sm-pct {
          font-size: 0.65rem;
          font-weight: 600;
          color: #7C3AED;
          text-align: right;
        }

        /* ── CTA box ── */
        .why-cta-box {
          background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
          border-radius: 10px;
          padding: 36px 32px;
          box-shadow: 0 4px 32px rgba(15,23,42,0.12);
        }

        .wcta-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          color: #fff;
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .wcta-body {
          font-size: 0.8rem;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(248,250,252,0.6);
          margin-bottom: 28px;
        }

        .why-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 13px 30px;
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(139,92,246,0.4);
          transition: var(--transition);
        }
        .why-btn-primary:hover {
          box-shadow: 0 6px 28px rgba(139,92,246,0.6);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .why-hero { grid-template-columns: 1fr; height: auto; }
          .why-hero-img { height: 260px; }
          .why-bottom { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .why-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
