import { motion } from "framer-motion";

const f = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

// ── CHANGE IMAGE FILENAME HERE ──
const IMAGES = {
  hero: '/assets/enjoytheworld-dubai-4044191_1920.jpg',
};
// ────────────────────────────────

// ── WHEN YOU HAVE LOGOS: replace null with '/assets/logos/chanel.png' etc. ──
const BRANDS = [
  { name: "Chanel",            logo: null },
  { name: "Louis Vuitton",     logo: null },
  { name: "Dior",              logo: null },
  { name: "Hermès",            logo: null },
  { name: "Gucci",             logo: null },
  { name: "Prada",             logo: null },
  { name: "Cartier",           logo: null },
  { name: "Rolex",             logo: null },
  { name: "Bulgari",           logo: null },
  { name: "Valentino",         logo: null },
  { name: "Bottega Veneta",    logo: null },
  { name: "Balenciaga",        logo: null },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function FashionAvenue({ onNavigate }) {
  return (
    <div className="section fa-section">

      {/* ── Header ── */}
      <motion.div {...f(0)} className="section-label">Fashion Avenue</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        The Middle East's<br /><em>Luxury Capital.</em>
      </motion.h2>

      {/* ── Hero image + ticker as one unified block ── */}
      <motion.div {...f(0.16)} className="fa-hero-block">
        <div className="fa-hero">
          <div
            className="fa-hero-img"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          <div className="fa-hero-overlay" />
          <div className="fa-hero-stats">
            <div className="fhs-item">
              <span className="fhs-num">2.4M</span>
              <span className="fhs-lbl">sq ft of Luxury</span>
            </div>
            <div className="fhs-divider" />
            <div className="fhs-item">
              <span className="fhs-num">200+</span>
              <span className="fhs-lbl">Luxury Maisons</span>
            </div>
            <div className="fhs-divider" />
            <div className="fhs-item">
              <span className="fhs-num">#1</span>
              <span className="fhs-lbl">Luxury Destination, Middle East</span>
            </div>
          </div>
        </div>

        {/* ── Brand ticker ── */}
        <div className="fa-ticker-wrap">
          <div className="fa-ticker-track">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <div key={i} className="fa-ticker-item">
                {b.logo
                  ? <img src={b.logo} alt={b.name} className="fa-ticker-logo" />
                  : <span className="fa-ticker-name">{b.name}</span>
                }
                <span className="fa-ticker-dot">·</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── 3 column grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fa-grid"
      >
        {/* Stat 1 */}
        <div className="fa-stat-card">
          <div className="fsc-num">2.4M</div>
          <div className="fsc-unit">sq ft</div>
          <div className="fsc-lbl">Dedicated exclusively<br />to luxury retail</div>
        </div>

        {/* Stat 2 */}
        <div className="fa-stat-card">
          <div className="fsc-num">200+</div>
          <div className="fsc-unit">Maisons</div>
          <div className="fsc-lbl">The world's greatest<br />brands, one address</div>
        </div>

        {/* Quote */}
        <div className="fa-quote-card">
          <div className="fa-quote-mark">"</div>
          <p className="fa-quote-text">
            Fashion Avenue represents the pinnacle of retail positioning in the GCC.
            For a luxury brand, there is no more powerful statement of intent.
          </p>
        </div>
      </motion.div>

      {/* ── CTAs ── */}
      <motion.div {...f(0.55)} className="fa-ctas">
        <button className="fa-btn-primary" onClick={() => onNavigate("leasing")}>
          Enquire About Fashion Avenue
        </button>
        <button className="fa-btn-outline" onClick={() => onNavigate("attractions")}>
          See Attractions →
        </button>
      </motion.div>

      <style>{`
        .fa-section {
          background: #F8FAFC;
          overflow: hidden;
        }

        /* ── Hero block (image + ticker as one unit) ── */
        .fa-hero-block {
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
          box-shadow: 0 4px 32px rgba(15,23,42,0.12);
        }

        /* ── Hero ── */
        .fa-hero {
          position: relative;
          height: 340px;
        }
        .fa-hero-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }
        .fa-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15,23,42,0.1) 0%,
            rgba(15,23,42,0.72) 100%
          );
        }
        .fa-hero-stats {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          display: flex;
          align-items: center;
          padding: 28px 40px;
        }
        .fhs-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .fhs-num {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 400;
          color: #fff;
          line-height: 1;
        }
        .fhs-lbl {
          font-size: 0.56rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.6);
        }
        .fhs-divider {
          width: 1px;
          height: 44px;
          background: rgba(248,250,252,0.2);
          margin: 0 40px;
          flex-shrink: 0;
        }

        /* ── Ticker ── */
        .fa-ticker-wrap {
          background: #0F172A;
          overflow: hidden;
          padding: 0;
        }
        .fa-ticker-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: fa-scroll 28s linear infinite;
          padding: 18px 0;
        }
        .fa-ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes fa-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .fa-ticker-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0 20px;
          flex-shrink: 0;
        }
        .fa-ticker-name {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 400;
          color: rgba(248,250,252,0.85);
          letter-spacing: 0.12em;
          white-space: nowrap;
          transition: color 0.3s;
        }
        .fa-ticker-item:hover .fa-ticker-name {
          color: #A78BFA;
        }
        .fa-ticker-logo {
          height: 22px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.85;
          transition: opacity 0.3s;
        }
        .fa-ticker-item:hover .fa-ticker-logo {
          opacity: 1;
          filter: brightness(0) invert(1) sepia(1) hue-rotate(220deg) saturate(3);
        }
        .fa-ticker-dot {
          color: rgba(139,92,246,0.5);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        /* ── 3 column grid ── */
        .fa-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.4fr;
          gap: 14px;
          margin-bottom: 16px;
          align-items: stretch;
        }
        .fa-stat-card {
          background: #fff;
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 10px;
          padding: 28px 24px;
          box-shadow: 0 2px 16px rgba(15,23,42,0.05);
          transition: var(--transition);
        }
        .fa-stat-card:hover {
          border-color: rgba(139,92,246,0.4);
          transform: translateY(-3px);
          box-shadow: 0 6px 28px rgba(139,92,246,0.1);
        }
        .fsc-num {
          font-family: var(--font-display);
          font-size: 3rem;
          font-weight: 400;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 4px;
        }
        .fsc-unit {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #94A3B8;
          margin-bottom: 12px;
        }
        .fsc-lbl {
          font-size: 0.78rem;
          font-weight: 300;
          color: #475569;
          line-height: 1.6;
        }
        .fa-quote-card {
          background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
          border-radius: 10px;
          padding: 28px 30px;
          box-shadow: 0 4px 24px rgba(15,23,42,0.12);
        }
        .fa-quote-mark {
          font-family: var(--font-display);
          font-size: 5rem;
          color: rgba(139,92,246,0.35);
          line-height: 0.55;
          margin-bottom: 14px;
        }
        .fa-quote-text {
          font-size: 0.84rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(248,250,252,0.75);
          line-height: 1.85;
        }

        /* ── CTAs ── */
        .fa-ctas {
          display: flex;
          gap: 12px;
        }
        .fa-btn-primary {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(139,92,246,0.3);
          transition: var(--transition);
        }
        .fa-btn-primary:hover {
          box-shadow: 0 6px 28px rgba(139,92,246,0.5);
          transform: translateY(-2px);
        }
        .fa-btn-outline {
          display: inline-flex;
          align-items: center;
          background: #fff;
          color: #1E293B;
          border: 1px solid rgba(15,23,42,0.15);
          padding: 13px 32px;
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          transition: var(--transition);
        }
        .fa-btn-outline:hover {
          border-color: rgba(139,92,246,0.4);
          color: #7C3AED;
        }

        @media (max-width: 1024px) {
          .fa-grid { grid-template-columns: 1fr 1fr; }
          .fa-quote-card { grid-column: span 2; }
        }
        @media (max-width: 768px) {
          .fa-grid { grid-template-columns: 1fr; }
          .fa-quote-card { grid-column: span 1; }
          .fa-ctas { flex-direction: column; }
          .fhs-divider { margin: 0 20px; }
        }
      `}</style>
    </div>
  );
}
