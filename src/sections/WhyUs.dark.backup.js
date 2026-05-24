import { motion } from "framer-motion";
import { mall } from "../data/mall";

const f = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

export default function WhyUs({ onNavigate }) {
  return (
    <div className="section why-section">
      <div className="why-layout">
        {/* Left */}
        <div className="why-left">
          <motion.div {...f(0)} className="section-label">Why The Dubai Mall</motion.div>
          <motion.div {...f(0.06)} className="gold-line" />
          <motion.h2 {...f(0.1)} className="section-title">
            The Centre<br />of <em>Everything.</em>
          </motion.h2>
          <motion.p {...f(0.16)} className="section-body">
            The Dubai Mall is not a shopping centre. It is a global destination — the most visited place on Earth, drawing 105 million visitors annually to the heart of a city that defines what ambition looks like.
          </motion.p>

          <motion.div {...f(0.22)} className="why-facts">
            {[
              { icon: "✈️", label: "Global Catchment", value: "2 billion people within a 4-hour flight" },
              { icon: "🌍", label: "International Visitors", value: "70% from outside the UAE — a truly global audience" },
              { icon: "🏙️", label: "Location", value: "Adjacent to Burj Khalifa, Downtown Dubai — the world's most photographed address" },
              { icon: "💳", label: "Spending Power", value: "AED 850+ median spend per visit" },
              { icon: "⏱️", label: "Dwell Time", value: "4+ hours average — unmatched brand exposure" },
            ].map((item) => (
              <div key={item.label} className="why-fact">
                <span className="wf-icon">{item.icon}</span>
                <div>
                  <div className="wf-label">{item.label}</div>
                  <div className="wf-value">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div {...f(0.35)} style={{ marginTop: 32 }}>
            <button className="btn-primary" onClick={() => onNavigate("fashion")}>
              Explore Fashion Avenue →
            </button>
          </motion.div>
        </div>

        {/* Right — stats + source markets */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="why-right"
        >
          <div className="why-stats-grid">
            {mall.stats.map((s, i) => (
              <div key={i} className="why-stat-card">
                <div className="wsc-value">
                  {s.value}<span className="wsc-suffix">{s.suffix}</span>
                </div>
                <div className="wsc-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="source-markets">
            <div className="sm-label">Top Visitor Source Markets</div>
            <div className="sm-bars">
              {[
                { country: "UAE", pct: 30 },
                { country: "Saudi Arabia", pct: 22 },
                { country: "India", pct: 14 },
                { country: "United Kingdom", pct: 9 },
                { country: "United States", pct: 8 },
                { country: "Russia", pct: 7 },
                { country: "China", pct: 6 },
              ].map((m, i) => (
                <motion.div
                  key={m.country}
                  className="sm-row"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                >
                  <div className="sm-country">{m.country}</div>
                  <div className="sm-bar-wrap">
                    <motion.div
                      className="sm-bar"
                      initial={{ width: 0 }}
                      animate={{ width: `${m.pct * 2.8}%` }}
                      transition={{ delay: 0.6 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="sm-pct">{m.pct}%</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .why-section { background: var(--black); padding: 0 80px; }

        .why-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          min-height: calc(100vh - 200px);
        }

        .why-facts {
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .why-fact {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(245,240,232,0.05);
        }

        .wf-icon { font-size: 1.1rem; margin-top: 1px; flex-shrink: 0; }

        .wf-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 3px;
        }

        .wf-value {
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--white-dim);
          line-height: 1.5;
        }

        .why-right { display: flex; flex-direction: column; gap: 24px; }

        .why-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .why-stat-card {
          background: var(--dark2);
          border: 1px solid var(--gold-border);
          padding: 28px 24px;
          transition: var(--transition);
        }
        .why-stat-card:hover { border-color: var(--gold); }

        .wsc-value {
          font-family: var(--font-display);
          font-size: 2.6rem;
          font-weight: 400;
          color: var(--gold);
          line-height: 1;
        }
        .wsc-suffix { font-size: 1.6rem; }

        .wsc-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--white-dim);
          margin-top: 8px;
        }

        .source-markets {
          background: var(--dark2);
          border: 1px solid var(--gold-border);
          padding: 28px 24px;
        }

        .sm-label {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .sm-bars { display: flex; flex-direction: column; gap: 10px; }

        .sm-row {
          display: grid;
          grid-template-columns: 110px 1fr 36px;
          align-items: center;
          gap: 12px;
        }

        .sm-country {
          font-size: 0.72rem;
          font-weight: 300;
          color: var(--white-dim);
        }

        .sm-bar-wrap {
          height: 2px;
          background: rgba(245,240,232,0.07);
        }

        .sm-bar {
          height: 100%;
          background: linear-gradient(to right, var(--gold), var(--gold-light));
        }

        .sm-pct {
          font-size: 0.65rem;
          font-weight: 400;
          color: var(--gold);
          text-align: right;
        }

        @media (max-width: 1024px) {
          .why-section { padding: 100px 40px; }
          .why-layout { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </div>
  );
}
