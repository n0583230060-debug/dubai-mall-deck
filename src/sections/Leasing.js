import { motion } from "framer-motion";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const ZONES = [
  {
    name:    "Fashion Avenue",
    accent:  "linear-gradient(to right, #8B5CF6, #A78BFA)",
    tag:     "Luxury Flagship",
    desc:    "The Middle East's premier luxury address. 200+ global maisons, 2.4M sq ft of curated retail — the only destination for a true luxury flagship.",
    stat:    "200+",
    statLbl: "Luxury Maisons",
    cta:     "Enquire About Fashion Avenue",
  },
  {
    name:    "Premium Retail",
    accent:  "linear-gradient(to right, #6D28D9, #8B5CF6)",
    tag:     "Prime Mall Locations",
    desc:    "High-footfall corridors across 5.9M sq ft of retail. Benefit from 105M annual visitors and direct access to the world's most diverse consumer base.",
    stat:    "5.9M",
    statLbl: "sq ft Total Retail",
    cta:     "View Available Units",
  },
  {
    name:    "Pop-Up & Kiosk",
    accent:  "linear-gradient(to right, #7C3AED, #8B5CF6)",
    tag:     "Flexible · Short-Term",
    desc:    "Launch, test, and activate. Short-term formats across the mall's busiest zones — ideal for new market entry, brand activations, and seasonal campaigns.",
    stat:    "Flexible",
    statLbl: "Terms from 1 Week",
    cta:     "Explore Pop-Up Options",
  },
  {
    name:    "F&B & Hospitality",
    accent:  "linear-gradient(to right, #8B5CF6, #C4B5FD)",
    tag:     "Dining & Experience",
    desc:    "Serve the world. Dubai Mall's F&B offering spans 200+ outlets across casual, premium, and fine dining — with captive audiences spending 4+ hours per visit.",
    stat:    "200+",
    statLbl: "F&B Outlets",
    cta:     "Enquire F&B Leasing",
  },
];

const STATS = [
  { stat: "105M+",    label: "Annual Visitors" },
  { stat: "AED 850+", label: "Median Spend / Visit" },
  { stat: "4hr+",     label: "Average Dwell Time" },
  { stat: "70%",      label: "International Visitors" },
];

export default function Leasing({ onNavigate }) {
  return (
    <div className="section ls2-section">

      {/* ── Header ── */}
      <motion.div {...f(0)} className="section-label">Retail Leasing</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        Secure Your Position<br />at the <em>Centre of the World.</em>
      </motion.h2>

      {/* ── Main layout ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="ls2-layout"
      >

        {/* ── Zone cards 2×2 ── */}
        <div className="ls2-grid">
          {ZONES.map((z, i) => (
            <motion.div
              key={z.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="ls2-card"
            >
              <div className="ls2-card-accent" style={{ background: z.accent }} />
              <div className="ls2-card-body">
                <div className="ls2-card-tag">{z.tag}</div>
                <div className="ls2-card-name">{z.name}</div>
                <p className="ls2-card-desc">{z.desc}</p>
                <div className="ls2-card-bottom">
                  <div className="ls2-card-stat-wrap">
                    <div className="ls2-card-stat">{z.stat}</div>
                    <div className="ls2-card-stat-lbl">{z.statLbl}</div>
                  </div>
                  <button className="ls2-btn-outline" onClick={() => onNavigate("contact")}>
                    {z.cta} →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Right: stat panel ── */}
        <div className="ls2-panel">
          <div className="ls2-panel-eyebrow">Why The Dubai Mall</div>
          <div className="ls2-panel-stats">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                className="ls2-panel-stat"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              >
                <div className="ls2-panel-num">{s.stat}</div>
                <div className="ls2-panel-lbl">{s.label}</div>
                {i < STATS.length - 1 && <div className="ls2-panel-rule" />}
              </motion.div>
            ))}
          </div>
          <div className="ls2-panel-footer">
            <p className="ls2-panel-note">
              Your customers are already here. The only question is whether your brand is.
            </p>
            <button className="ls2-btn-primary" onClick={() => onNavigate("contact")}>
              Contact Leasing Team →
            </button>
          </div>
        </div>

      </motion.div>

      <style>{`
        .ls2-section { background: #F8FAFC; }

        /* ── Main layout ── */
        .ls2-layout {
          display: grid;
          grid-template-columns: 1.65fr 1fr;
          gap: 18px;
          align-items: start;
        }

        /* ── Zone cards ── */
        .ls2-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .ls2-card {
          background: #fff;
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 14px rgba(15,23,42,0.06);
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex;
          flex-direction: column;
        }
        .ls2-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139,92,246,0.4);
          box-shadow: 0 10px 32px rgba(139,92,246,0.13);
        }

        .ls2-card-accent {
          height: 3px;
          width: 100%;
          flex-shrink: 0;
        }

        .ls2-card-body {
          padding: 20px 20px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .ls2-card-tag {
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: #8B5CF6;
          margin-bottom: 6px;
        }

        .ls2-card-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 400;
          color: #0F172A;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .ls2-card-desc {
          font-size: 0.72rem;
          font-weight: 300;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 18px;
          flex: 1;
        }

        .ls2-card-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .ls2-card-stat {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          background: linear-gradient(135deg, #8B5CF6, #6D28D9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 2px;
        }

        .ls2-card-stat-lbl {
          font-size: 0.52rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #94A3B8;
        }

        /* ── Right stat panel ── */
        .ls2-panel {
          background: linear-gradient(160deg, #0F172A 0%, #1E1B4B 100%);
          border-radius: 10px;
          padding: 32px 28px;
          box-shadow: 0 4px 32px rgba(15,23,42,0.14);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 20px;
        }

        .ls2-panel-eyebrow {
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #A78BFA;
          margin-bottom: 24px;
        }

        .ls2-panel-stats {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-bottom: 28px;
        }

        .ls2-panel-stat {
          padding: 4px 0;
        }

        .ls2-panel-num {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 2.4vw, 2.4rem);
          font-weight: 400;
          background: linear-gradient(135deg, #A78BFA, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 5px;
        }

        .ls2-panel-lbl {
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.45);
        }

        .ls2-panel-rule {
          width: 100%;
          height: 1px;
          background: rgba(248,250,252,0.07);
          margin: 16px 0;
        }

        .ls2-panel-footer {
          border-top: 1px solid rgba(248,250,252,0.08);
          padding-top: 22px;
        }

        .ls2-panel-note {
          font-size: 0.75rem;
          font-weight: 300;
          font-style: italic;
          color: rgba(248,250,252,0.5);
          line-height: 1.7;
          margin-bottom: 18px;
        }

        /* ── Buttons ── */
        .ls2-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 13px 20px;
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
        .ls2-btn-primary:hover {
          box-shadow: 0 6px 24px rgba(139,92,246,0.6);
          transform: translateY(-2px);
        }

        .ls2-btn-outline {
          display: inline-flex;
          align-items: center;
          background: transparent;
          color: #475569;
          border: 1px solid rgba(15,23,42,0.15);
          padding: 8px 14px;
          font-family: var(--font-body);
          font-size: 0.56rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          white-space: nowrap;
          transition: all 0.4s ease;
          flex-shrink: 0;
        }
        .ls2-btn-outline:hover {
          border-color: rgba(139,92,246,0.4);
          color: #7C3AED;
        }

        @media (max-width: 1024px) {
          .ls2-layout { grid-template-columns: 1fr; }
          .ls2-panel { position: static; }
          .ls2-panel-stats { flex-direction: row; flex-wrap: wrap; gap: 0; }
          .ls2-panel-stat { flex: 1; min-width: 45%; }
          .ls2-panel-rule { display: none; }
        }
        @media (max-width: 768px) {
          .ls2-grid { grid-template-columns: 1fr; }
          .ls2-card-bottom { flex-direction: column; align-items: flex-start; }
          .ls2-btn-outline { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  );
}
