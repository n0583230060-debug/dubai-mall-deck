import { motion } from "framer-motion";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

// ── CHANGE IMAGE FILENAMES HERE ──────────────────────────────
const IMAGES = {
  hero:     '/assets/enjoytheworld-dubai-4044191_1920.jpg',
  icerink:  '/assets/enjoytheworld-dubai-4044191_1920.jpg',
  fountain: '/assets/enjoytheworld-dubai-4044191_1920.jpg',
};
// ────────────────────────────────────────────────────────────

// ── TO SWITCH BACK TO LIGHT: change --ev-bg to #F8FAFC ──────
//    and --ev-text to #0F172A, --ev-dim to #475569
// ────────────────────────────────────────────────────────────

const PAST_EVENTS = [
  "Global fashion week satellite shows — Dior, Valentino",
  "FIFA World Cup fan zones & activations",
  "New Year's Eve — world's largest public gathering",
  "Apple, Samsung & Tesla flagship product launches",
  "Global music performances & arena-scale concerts",
  "Formula 1 driver appearances & pit stop activations",
];

export default function Events({ onNavigate }) {
  return (
    <div className="section ev-section">

      {/* ── Header ── */}
      <motion.div {...f(0)} className="section-label ev-label">Events & Venue Platform</motion.div>
      <motion.div {...f(0.06)} className="ev-gold-line" />
      <motion.h2 {...f(0.1)} className="ev-title">
        The World's<br /><em>Stage.</em>
      </motion.h2>

      {/* ── Bento grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="ev-bento"
      >

        {/* A — Hero image cell (large, top-left) */}
        <div className="ev-cell ev-cell-hero">
          <div className="ev-img" style={{ backgroundImage: `url(${IMAGES.hero})` }} />
          <div className="ev-img-overlay" />
          <div className="ev-cell-content">
            <div className="ev-hero-num">105,000+</div>
            <div className="ev-hero-sub-label">People on a Single Event Day</div>
          </div>
        </div>

        {/* B — Grand Atrium stat */}
        <div className="ev-cell ev-cell-stat">
          <div className="ev-stat-num">15,000+</div>
          <div className="ev-stat-name">Grand Atrium</div>
          <div className="ev-stat-type">Fashion shows · Brand launches · Live performances</div>
        </div>

        {/* C — Fashion Blvd stat */}
        <div className="ev-cell ev-cell-stat">
          <div className="ev-stat-num">8,000+</div>
          <div className="ev-stat-name">Fashion Avenue Blvd.</div>
          <div className="ev-stat-type">Runway shows · Pop-ups · Media events</div>
        </div>

        {/* D — Ice Rink image cell */}
        <div className="ev-cell ev-cell-img-sm">
          <div className="ev-img" style={{ backgroundImage: `url(${IMAGES.icerink})` }} />
          <div className="ev-img-overlay ev-img-overlay-bottom" />
          <div className="ev-cell-content ev-cell-content-bottom">
            <div className="ev-venue-cap">3,000</div>
            <div className="ev-venue-name">Dubai Ice Rink Arena</div>
          </div>
        </div>

        {/* E — Past events + CTA */}
        <div className="ev-cell ev-cell-events">
          <div className="ev-events-label">Notable Highlights</div>
          <div className="ev-events-list">
            {PAST_EVENTS.map((h, i) => (
              <motion.div
                key={i}
                className="ev-event-row"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
              >
                <span className="ev-event-mark">✦</span>
                <span>{h}</span>
              </motion.div>
            ))}
          </div>
          <div className="ev-ctas">
            <button className="ev-btn-primary" onClick={() => onNavigate("contact")}>
              Book a Venue →
            </button>
            <button className="ev-btn-outline" onClick={() => onNavigate("sponsorship")}>
              View Sponsorship
            </button>
          </div>
        </div>

        {/* F — Fountain image cell */}
        <div className="ev-cell ev-cell-img-sm">
          <div className="ev-img" style={{ backgroundImage: `url(${IMAGES.fountain})` }} />
          <div className="ev-img-overlay ev-img-overlay-bottom" />
          <div className="ev-cell-content ev-cell-content-bottom">
            <div className="ev-venue-cap">5,000+</div>
            <div className="ev-venue-name">Fountain Views Terrace</div>
          </div>
        </div>

        {/* G — Outdoor mega stat (full width bottom) */}
        <div className="ev-cell ev-cell-outdoor">
          <div className="ev-outdoor-num">50,000+</div>
          <div className="ev-outdoor-label">The Dubai Mall Outdoor</div>
          <div className="ev-outdoor-type">Mega concerts · Festivals · National Day events</div>
        </div>

      </motion.div>

      <style>{`
        /* ── Dark theme variables — change here to go light ── */
        .ev-section {
          --ev-bg:       #0D1117;
          --ev-cell-bg:  #161B22;
          --ev-border:   rgba(139,92,246,0.18);
          --ev-text:     #F8FAFC;
          --ev-dim:      rgba(248,250,252,0.5);
          --ev-dimmer:   rgba(248,250,252,0.3);
          background: var(--ev-bg);
        }

        .ev-label { color: #A78BFA !important; }

        .ev-gold-line {
          width: 48px;
          height: 1px;
          background: linear-gradient(to right, #8B5CF6, transparent);
          margin-bottom: 22px;
        }

        .ev-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.5vw, 4.2rem);
          font-weight: 400;
          line-height: 1.12;
          color: var(--ev-text);
          margin-bottom: 24px;
        }
        .ev-title em {
          font-style: italic;
          background: linear-gradient(135deg, #8B5CF6, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Bento grid ── */
        .ev-bento {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 10px;
        }

        .ev-cell {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--ev-border);
          background: var(--ev-cell-bg);
          position: relative;
        }

        /* ── Hero cell ── */
        .ev-cell-hero {
          grid-column: 1;
          grid-row: 1 / 3;
          min-height: 300px;
        }

        /* ── Small stat cells ── */
        .ev-cell-stat {
          padding: 24px 22px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: border-color 0.3s;
        }
        .ev-cell-stat:hover { border-color: rgba(139,92,246,0.45); }

        .ev-stat-num {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 400;
          background: linear-gradient(135deg, #8B5CF6, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 7px;
        }
        .ev-stat-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--ev-text);
          margin-bottom: 5px;
        }
        .ev-stat-type {
          font-size: 0.62rem;
          font-weight: 300;
          color: var(--ev-dim);
          font-style: italic;
          line-height: 1.4;
        }

        /* ── Image cells (Ice Rink + Fountain) ── */
        .ev-cell-img-sm {
          min-height: 180px;
        }

        /* ── Events list cell ── */
        .ev-cell-events {
          grid-column: 2 / 4;
          padding: 26px 28px;
        }

        /* ── Outdoor full-width cell ── */
        .ev-cell-outdoor {
          grid-column: 1 / 4;
          background: linear-gradient(135deg, #1E1B4B 0%, #2D1B69 100%);
          border-color: rgba(139,92,246,0.35);
          padding: 22px 32px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        /* ── Image shared styles ── */
        .ev-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ev-cell:hover .ev-img { transform: scale(1.04); }

        .ev-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(13,17,23,0.2) 0%, rgba(13,17,23,0.7) 100%);
        }
        .ev-img-overlay-bottom {
          background: linear-gradient(to bottom, transparent 30%, rgba(13,17,23,0.88) 100%);
        }

        .ev-cell-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 24px;
        }
        .ev-cell-content-bottom {
          justify-content: flex-end;
          align-items: flex-start;
          text-align: left;
        }

        .ev-hero-num {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 400;
          color: #fff;
          line-height: 1;
          margin-bottom: 8px;
        }
        .ev-hero-sub-label {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #A78BFA;
        }

        .ev-venue-cap {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 400;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .ev-venue-name {
          font-size: 0.68rem;
          font-weight: 500;
          color: rgba(248,250,252,0.7);
          letter-spacing: 0.04em;
        }

        /* ── Events list ── */
        .ev-events-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #A78BFA;
          margin-bottom: 14px;
        }
        .ev-events-list {
          display: flex;
          flex-direction: column;
          margin-bottom: 22px;
        }
        .ev-event-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(248,250,252,0.06);
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--ev-dim);
          line-height: 1.4;
        }
        .ev-event-row:last-child { border-bottom: none; }
        .ev-event-mark {
          color: #8B5CF6;
          font-size: 0.5rem;
          margin-top: 4px;
          flex-shrink: 0;
        }

        /* ── Outdoor strip ── */
        .ev-outdoor-num {
          font-family: var(--font-display);
          font-size: 2.6rem;
          font-weight: 400;
          background: linear-gradient(135deg, #A78BFA, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          flex-shrink: 0;
        }
        .ev-outdoor-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--ev-text);
          flex-shrink: 0;
        }
        .ev-outdoor-type {
          font-size: 0.68rem;
          font-weight: 300;
          color: var(--ev-dim);
          font-style: italic;
        }

        /* ── Buttons ── */
        .ev-ctas { display: flex; gap: 10px; flex-wrap: wrap; }
        .ev-btn-primary {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 12px 24px;
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          box-shadow: 0 4px 16px rgba(139,92,246,0.4);
          transition: all 0.4s ease;
        }
        .ev-btn-primary:hover {
          box-shadow: 0 6px 24px rgba(139,92,246,0.6);
          transform: translateY(-2px);
        }
        .ev-btn-outline {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: rgba(248,250,252,0.7);
          border: 1px solid rgba(248,250,252,0.15);
          padding: 11px 24px;
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.4s ease;
        }
        .ev-btn-outline:hover {
          border-color: rgba(139,92,246,0.5);
          color: #A78BFA;
        }

        @media (max-width: 1024px) {
          .ev-bento { grid-template-columns: 1fr 1fr; }
          .ev-cell-hero { grid-column: 1 / 3; grid-row: 1; min-height: 240px; }
          .ev-cell-events { grid-column: 1 / 3; }
          .ev-cell-outdoor { grid-column: 1 / 3; flex-direction: column; align-items: flex-start; gap: 8px; }
        }
        @media (max-width: 768px) {
          .ev-bento { grid-template-columns: 1fr; }
          .ev-cell-hero, .ev-cell-events, .ev-cell-outdoor { grid-column: 1; }
        }
      `}</style>
    </div>
  );
}
