import { motion } from "framer-motion";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

// ── CHANGE IMAGE FILENAMES HERE — one line per attraction ──
const IMAGES = {
  aquarium: '/assets/aquarium.webp',
  fountain: '/assets/fountain.webp',
  icerink:  '/assets/icerink.webp',
  vr:       '/assets/vr.webp',
  kidzania: '/assets/kidzania.webp',
  cinema:   '/assets/cinema.webp',
};
// ──────────────────────────────────────────────────────────

const ATTRACTIONS = [
  {
    key:       'aquarium',
    title:     'Dubai Aquarium',
    stat:      '33,000',
    statLabel: 'Aquatic Animals',
    sub:       "World's largest indoor aquarium tank",
  },
  {
    key:       'fountain',
    title:     'Dubai Fountain',
    stat:      '150m',
    statLabel: 'Water in the Air',
    sub:       "World's largest choreographed fountain",
  },
  {
    key:       'icerink',
    title:     'Dubai Ice Rink',
    stat:      'Olympic',
    statLabel: 'Sized · Open Year-Round',
    sub:       'Concerts, shows & corporate bookings',
  },
  {
    key:       'vr',
    title:     'VR Park',
    stat:      '30+',
    statLabel: 'VR Experiences',
    sub:       '75,000 sq ft of immersive technology',
  },
  {
    key:       'kidzania',
    title:     'KidZania Dubai',
    stat:      '80K',
    statLabel: 'sq ft Edutainment City',
    sub:       'Families from across the GCC & beyond',
  },
  {
    key:       'cinema',
    title:     'Reel Cinemas',
    stat:      '16',
    statLabel: 'Premium Screens',
    sub:       'IMAX · 4DX · Private Screenings',
  },
];

const ENGAGEMENT = [
  { stat: '4hr+',  label: 'Average Dwell Time'    },
  { stat: '68%',   label: 'Repeat Visitor Rate'   },
  { stat: '105M+', label: 'Annual Footfall'        },
  { stat: '70%',   label: 'International Visitors' },
];

export default function Attractions({ onNavigate }) {
  return (
    <div className="section att-section">

      {/* ── Header ── */}
      <motion.div {...f(0)} className="section-label">Attractions & Entertainment</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        Beyond Retail.<br /><em>Beyond Imagination.</em>
      </motion.h2>

      {/* ── Pitch bar ── */}
      <motion.div {...f(0.16)} className="att-pitch">
        <p className="att-pitch-text">
          Every attraction multiplies your brand exposure —
          <strong> automatically.</strong>
        </p>
        <div className="att-pitch-stats">
          <span>4hr+ Dwell Time</span>
          <span className="att-pitch-dot">·</span>
          <span>68% Return Visitors</span>
          <span className="att-pitch-dot">·</span>
          <span>6 World-Class Attractions Under One Roof</span>
        </div>
      </motion.div>

      {/* ── 3×2 attraction cards ── */}
      <div className="att-grid">
        {ATTRACTIONS.map((a, i) => (
          <motion.div
            key={a.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="att-card"
          >
            <div
              className="att-card-img"
              style={{ backgroundImage: `url(${IMAGES[a.key]})` }}
            />
            <div className="att-card-overlay" />
            <div className="att-card-body">
              <div className="att-card-stat">{a.stat}</div>
              <div className="att-card-stat-label">{a.statLabel}</div>
              <div className="att-card-title">{a.title}</div>
              <div className="att-card-sub">{a.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Engagement stats ── */}
      <motion.div {...f(0.6)} className="att-engagement">
        {ENGAGEMENT.map((e) => (
          <div key={e.label} className="att-eng-item">
            <div className="att-eng-stat">{e.stat}</div>
            <div className="att-eng-label">{e.label}</div>
          </div>
        ))}
        <div className="att-eng-cta">
          <button className="att-btn" onClick={() => onNavigate("events")}>
            View Events Platform →
          </button>
        </div>
      </motion.div>

      <style>{`
        .att-section { background: #F8FAFC; }

        /* ── Pitch bar ── */
        .att-pitch {
          background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
          border-radius: 10px;
          padding: 20px 32px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .att-pitch-text {
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(248,250,252,0.9);
          font-style: italic;
        }
        .att-pitch-text strong {
          color: #A78BFA;
          font-weight: 600;
          font-style: normal;
        }
        .att-pitch-stats {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.5);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .att-pitch-dot { color: rgba(139,92,246,0.5); }

        /* ── Grid ── */
        .att-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 14px;
        }

        .att-card {
          position: relative;
          height: 240px;
          border-radius: 10px;
          overflow: hidden;
          cursor: default;
          border: 1px solid rgba(139,92,246,0.15);
          box-shadow: 0 2px 16px rgba(15,23,42,0.08);
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .att-card:hover {
          transform: translateY(-5px) scale(1.01);
          border-color: rgba(139,92,246,0.5);
          box-shadow: 0 12px 40px rgba(139,92,246,0.2);
        }

        .att-card-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .att-card:hover .att-card-img {
          transform: scale(1.06);
        }

        .att-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15,23,42,0.25) 0%,
            rgba(15,23,42,0.85) 100%
          );
        }

        .att-card-body {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 20px;
        }

        .att-card-stat {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 400;
          color: #fff;
          line-height: 1;
        }

        .att-card-stat-label {
          font-size: 0.55rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #A78BFA;
          margin-bottom: 8px;
          margin-top: 3px;
        }

        .att-card-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 400;
          color: #fff;
          margin-bottom: 4px;
        }

        .att-card-sub {
          font-size: 0.68rem;
          font-weight: 300;
          color: rgba(248,250,252,0.6);
          line-height: 1.4;
        }

        /* ── Engagement strip ── */
        .att-engagement {
          display: grid;
          grid-template-columns: repeat(4, 1fr) auto;
          gap: 12px;
          align-items: center;
        }

        .att-eng-item {
          background: #fff;
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 8px;
          padding: 18px 16px;
          box-shadow: 0 2px 12px rgba(15,23,42,0.05);
          text-align: center;
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .att-eng-item:hover {
          border-color: rgba(139,92,246,0.4);
          transform: translateY(-2px);
        }

        .att-eng-stat {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 400;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
        }

        .att-eng-label {
          font-size: 0.56rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #64748B;
        }

        .att-eng-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 8px;
        }

        .att-btn {
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 14px 24px;
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(139,92,246,0.3);
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .att-btn:hover {
          box-shadow: 0 6px 28px rgba(139,92,246,0.5);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .att-grid { grid-template-columns: repeat(2, 1fr); }
          .att-engagement { grid-template-columns: repeat(2, 1fr); }
          .att-eng-cta { grid-column: span 2; }
          .att-pitch { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 768px) {
          .att-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
