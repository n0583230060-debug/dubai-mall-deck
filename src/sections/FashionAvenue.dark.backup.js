import { motion } from "framer-motion";
import { mall } from "../data/mall";

const f = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function FashionAvenue({ onNavigate }) {
  return (
    <div className="section fa-section">
      {/* Background texture */}
      <div className="fa-bg" />

      <div className="fa-layout">
        {/* Left */}
        <div className="fa-left">
          <motion.div {...f(0)} className="section-label">Fashion Avenue</motion.div>
          <motion.div {...f(0.06)} className="gold-line" />
          <motion.h2 {...f(0.1)} className="section-title">
            The Middle East's<br /><em>Luxury Capital.</em>
          </motion.h2>
          <motion.p {...f(0.16)} className="section-body">
            Fashion Avenue is not a section of The Dubai Mall — it is a 2.4 million sq ft luxury world unto itself. Larger than most standalone malls, it houses every great maison in one extraordinary address.
          </motion.p>

          <motion.div {...f(0.22)} className="fa-stat-row">
            <div className="fa-stat">
              <div className="fa-stat-v">2.4M</div>
              <div className="fa-stat-l">Sq Ft Dedicated to Luxury</div>
            </div>
            <div className="fa-stat">
              <div className="fa-stat-v">200+</div>
              <div className="fa-stat-l">Luxury & Designer Brands</div>
            </div>
          </motion.div>

          <motion.p {...f(0.28)} className="fa-quote">
            "Fashion Avenue represents the pinnacle of retail positioning in the GCC. For a luxury brand, there is no more powerful statement of intent."
          </motion.p>

          <motion.div {...f(0.34)} style={{ marginTop: 32, display: "flex", gap: 14 }}>
            <button className="btn-primary" onClick={() => onNavigate("leasing")}>
              Enquire About Fashion Avenue
            </button>
            <button className="btn-outline" onClick={() => onNavigate("attractions")}>
              See Attractions →
            </button>
          </motion.div>
        </div>

        {/* Right — brand grid */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fa-right"
        >
          <div className="fa-brands-label">Resident Maisons</div>
          <div className="fa-brands-grid">
            {mall.fashionAvenue.brands.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                className="fa-brand"
              >
                {b}
              </motion.div>
            ))}
          </div>

          <div className="fa-cta-box">
            <div className="fa-cta-label">Ready to Join Fashion Avenue?</div>
            <p>Our leasing team works exclusively with brands that meet the positioning standards of Fashion Avenue. Enquiries are handled with full discretion.</p>
            <button className="btn-primary" onClick={() => onNavigate("contact")}>
              Request a Private Consultation
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .fa-section {
          background: var(--black);
          overflow: hidden;
        }

        .fa-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .fa-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: calc(100vh - 200px);
          position: relative;
          z-index: 1;
        }

        .fa-stat-row {
          display: flex;
          gap: 40px;
          margin-top: 32px;
          padding: 28px 0;
          border-top: 1px solid var(--gold-border);
          border-bottom: 1px solid var(--gold-border);
        }

        .fa-stat-v {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 400;
          color: var(--gold);
          line-height: 1;
        }

        .fa-stat-l {
          font-size: 0.58rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--white-dim);
          margin-top: 6px;
        }

        .fa-quote {
          margin-top: 28px;
          padding-left: 20px;
          border-left: 2px solid var(--gold);
          font-size: 0.82rem;
          font-weight: 300;
          font-style: italic;
          color: var(--white-dim);
          line-height: 1.8;
        }

        .fa-brands-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .fa-brands-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-bottom: 28px;
        }

        .fa-brand {
          background: var(--dark2);
          border: 1px solid var(--gold-border);
          padding: 14px 12px;
          font-size: 0.68rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--sand);
          text-align: center;
          transition: var(--transition);
        }
        .fa-brand:hover {
          background: var(--gold-pale);
          border-color: var(--gold);
          color: var(--gold);
        }

        .fa-cta-box {
          background: var(--dark2);
          border: 1px solid var(--gold-border);
          padding: 28px;
        }

        .fa-cta-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 10px;
        }

        .fa-cta-box p {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--white-dim);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        @media (max-width: 1024px) {
          .fa-layout { grid-template-columns: 1fr; gap: 40px; }
          .fa-brands-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </div>
  );
}
