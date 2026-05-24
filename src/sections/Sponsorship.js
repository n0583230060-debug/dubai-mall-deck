import { motion } from "framer-motion";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const REACH = [
  { stat: "105M+",    label: "Annual Visitors" },
  { stat: "190+",     label: "Countries Represented" },
  { stat: "AED 850+", label: "Median Spend / Visit" },
  { stat: "4hr+",     label: "Average Dwell Time" },
];

const TIERS = [
  {
    name:     "Premier Partner",
    tag:      "Most Exclusive",
    reach:    "Mall-wide · Category Exclusive",
    featured: true,
    features: [
      "Naming rights for a landmark venue",
      "Digital screens across 6M sq ft",
      "Dedicated Brand Experience Zone",
      "VIP event co-hosting — 5 events/year",
      "Quarterly campaign integrations",
      "Dedicated account management team",
    ],
  },
  {
    name:     "Signature Partner",
    tag:      null,
    reach:    "Premium · High-traffic zones",
    featured: false,
    features: [
      "Fashion Avenue & Grand Atrium activations",
      "Digital screen campaigns across 4 zones",
      "3 co-hosted events per year",
      "Pop-up space allocation",
      "Brand integration in communications",
      "Bi-annual performance reporting",
    ],
  },
  {
    name:     "Brand Partner",
    tag:      null,
    reach:    "Targeted · Entrance & Atrium",
    featured: false,
    features: [
      "Entrance atrium brand activations",
      "Digital screen packages — 2 zones",
      "1 co-hosted event per year",
      "Social media co-campaigns",
      "Visitor engagement programme",
      "Quarterly performance reporting",
    ],
  },
];

export default function Sponsorship({ onNavigate }) {
  return (
    <div className="section sp2-section">

      {/* ── Header ── */}
      <motion.div {...f(0)} className="section-label">Sponsorship & Brand Partnerships</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        Your Brand.<br /><em>The World's Stage.</em>
      </motion.h2>

      {/* ── Reach strip ── */}
      <motion.div {...f(0.16)} className="sp2-reach">
        {REACH.map((r, i) => (
          <div key={r.label} className="sp2-reach-item">
            <div className="sp2-reach-stat">{r.stat}</div>
            <div className="sp2-reach-label">{r.label}</div>
            {i < REACH.length - 1 && <div className="sp2-reach-divider" />}
          </div>
        ))}
      </motion.div>

      {/* ── Tier cards ── */}
      <div className="sp2-tiers">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`sp2-card ${tier.featured ? "sp2-card-featured" : ""}`}
          >
            {tier.featured && <div className="sp2-badge">Most Exclusive</div>}
            <div className="sp2-card-top" />
            <div className="sp2-card-body">
              <div className="sp2-tier-name">{tier.name}</div>
              <div className="sp2-tier-reach">{tier.reach}</div>
              <div className="sp2-features">
                {tier.features.map((feat) => (
                  <div key={feat} className="sp2-feat">
                    <span className="sp2-mark">✦</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <button
                className={tier.featured ? "sp2-btn-primary" : "sp2-btn-outline"}
                onClick={() => onNavigate("contact")}
              >
                Get Package Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Footer bar ── */}
      <motion.div {...f(0.58)} className="sp2-footer">
        <p className="sp2-footer-text">
          Every partnership is <strong>bespoke.</strong> Our team will design a programme
          built around your brand objectives, audience, and timeline.
        </p>
        <button className="sp2-btn-primary sp2-footer-btn" onClick={() => onNavigate("contact")}>
          Begin the Conversation →
        </button>
      </motion.div>

      <style>{`
        .sp2-section { background: #F8FAFC; }

        /* ── Reach strip ── */
        .sp2-reach {
          background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%);
          border-radius: 10px;
          display: flex;
          align-items: stretch;
          margin-bottom: 20px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(15,23,42,0.12);
        }
        .sp2-reach-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 20px;
          position: relative;
          text-align: center;
        }
        .sp2-reach-stat {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 400;
          background: linear-gradient(135deg, #A78BFA, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 7px;
        }
        .sp2-reach-label {
          font-size: 0.56rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(248,250,252,0.55);
        }
        .sp2-reach-divider {
          position: absolute;
          right: 0;
          top: 25%;
          height: 50%;
          width: 1px;
          background: rgba(248,250,252,0.1);
        }

        /* ── Tier cards ── */
        .sp2-tiers {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
          align-items: start;
        }

        .sp2-card {
          background: #fff;
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(15,23,42,0.06);
          position: relative;
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sp2-card:hover {
          transform: translateY(-5px);
          border-color: rgba(139,92,246,0.4);
          box-shadow: 0 10px 36px rgba(139,92,246,0.14);
        }
        .sp2-card-featured {
          border-color: #8B5CF6 !important;
          background: linear-gradient(160deg, #fff 0%, rgba(139,92,246,0.04) 100%);
          box-shadow: 0 4px 28px rgba(139,92,246,0.18) !important;
        }
        .sp2-card-featured:hover {
          box-shadow: 0 14px 44px rgba(139,92,246,0.28) !important;
        }

        .sp2-badge {
          position: absolute;
          top: 0;
          right: 20px;
          background: linear-gradient(135deg, #8B5CF6, #6D28D9);
          color: #fff;
          font-size: 0.5rem;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 0 0 6px 6px;
        }

        .sp2-card-top {
          height: 3px;
          background: linear-gradient(to right, #8B5CF6, #A78BFA);
        }
        .sp2-card-featured .sp2-card-top {
          height: 4px;
          background: linear-gradient(to right, #7C3AED, #8B5CF6, #A78BFA);
        }

        .sp2-card-body {
          padding: 28px 26px 26px;
        }

        .sp2-tier-name {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 400;
          color: #0F172A;
          margin-bottom: 6px;
          padding-right: 60px;
        }
        .sp2-card-featured .sp2-tier-name {
          padding-right: 0;
        }

        .sp2-tier-reach {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8B5CF6;
          margin-bottom: 22px;
        }

        .sp2-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 26px;
        }
        .sp2-feat {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.76rem;
          font-weight: 300;
          color: #475569;
          line-height: 1.45;
        }
        .sp2-mark {
          color: #8B5CF6;
          font-size: 0.5rem;
          margin-top: 4px;
          flex-shrink: 0;
        }

        /* ── Buttons ── */
        .sp2-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 13px 24px;
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          box-shadow: 0 4px 16px rgba(139,92,246,0.35);
          transition: all 0.4s ease;
        }
        .sp2-btn-primary:hover {
          box-shadow: 0 6px 24px rgba(139,92,246,0.55);
          transform: translateY(-2px);
        }
        .sp2-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: transparent;
          color: #475569;
          border: 1px solid rgba(15,23,42,0.15);
          padding: 12px 24px;
          font-family: var(--font-body);
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.4s ease;
        }
        .sp2-btn-outline:hover {
          border-color: rgba(139,92,246,0.45);
          color: #7C3AED;
        }

        /* ── Footer bar ── */
        .sp2-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: #fff;
          border: 1px solid rgba(139,92,246,0.15);
          border-radius: 10px;
          padding: 24px 32px;
          box-shadow: 0 2px 16px rgba(15,23,42,0.05);
        }
        .sp2-footer-text {
          font-size: 0.82rem;
          font-weight: 300;
          font-style: italic;
          color: #475569;
          line-height: 1.7;
        }
        .sp2-footer-text strong {
          color: #0F172A;
          font-weight: 600;
          font-style: normal;
        }
        .sp2-footer-btn {
          width: auto;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .sp2-tiers { grid-template-columns: 1fr; }
          .sp2-footer { flex-direction: column; align-items: flex-start; }
          .sp2-footer-btn { width: 100%; }
          .sp2-reach { flex-wrap: wrap; }
          .sp2-reach-item { min-width: 45%; }
        }
        @media (max-width: 768px) {
          .sp2-reach-divider { display: none; }
          .sp2-reach-item { min-width: 100%; border-bottom: 1px solid rgba(248,250,252,0.08); }
        }
      `}</style>
    </div>
  );
}
