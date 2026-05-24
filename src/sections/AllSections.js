import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mall } from "../data/mall";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

/* ─────────────────────────────────── ATTRACTIONS ── */
export function Attractions({ onNavigate }) {
  const [active, setActive] = useState(mall.highlights[0].id);
  const current = mall.highlights.find((h) => h.id === active);

  return (
    <div className="section att-section">
      <motion.div {...f(0)} className="section-label">Attractions & Entertainment</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        Beyond Retail.<br /><em>Beyond Imagination.</em>
      </motion.h2>

      <div className="att-layout">
        <motion.div {...f(0.16)} className="att-tabs">
          {mall.highlights.map((h) => (
            <button
              key={h.id}
              className={`att-tab ${active === h.id ? "active" : ""}`}
              onClick={() => setActive(h.id)}
              style={{ "--c": h.color }}
            >
              <span>{h.icon}</span>
              <span className="att-tab-label">{h.title}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="att-detail"
            style={{ borderTopColor: current.color }}
          >
            <div className="att-icon" style={{ color: current.color }}>{current.icon}</div>
            <div className="att-sub">{current.subtitle}</div>
            <h3 className="att-title">{current.title}</h3>
            <p className="att-desc">{current.description}</p>
            <div className="att-badge" style={{ background: current.color }}>
              World-Class · Downtown Dubai
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div {...f(0.26)} className="att-value">
          <div className="av-header">Visitor Engagement</div>
          {[
            { s: "4hr+", l: "Average dwell time" },
            { s: "68%", l: "Repeat visitor rate" },
            { s: "70%", l: "International visitors" },
            { s: "105M+", l: "Annual footfall" },
          ].map((v) => (
            <div key={v.l} className="av-row">
              <div className="av-stat">{v.s}</div>
              <div className="av-label">{v.l}</div>
            </div>
          ))}
          <button className="btn-outline" style={{ marginTop: 24, width: "100%" }} onClick={() => onNavigate("events")}>
            View Events Platform →
          </button>
        </motion.div>
      </div>

      <style>{`
        .att-section { background: var(--black); padding-bottom: 50px; }
        .att-layout { display: grid; grid-template-columns: 220px 1fr 240px; gap: 28px; margin-top: 32px; }
        .att-tabs { display: flex; flex-direction: column; gap: 4px; }
        .att-tab {
          background: none; border: none; border-left: 2px solid transparent;
          padding: 12px 14px; display: flex; align-items: center; gap: 10px;
          cursor: pointer; transition: var(--transition); text-align: left;
        }
        .att-tab:hover { border-left-color: rgba(139,92,246,0.3); background: rgba(139,92,246,0.04); }
        .att-tab.active { border-left-color: var(--c, var(--gold)); background: rgba(139,92,246,0.04); }
        .att-tab-label { font-size: 0.7rem; font-weight: 400; color: var(--white-dim); }
        .att-tab.active .att-tab-label { color: var(--white); }
        .att-detail { background: var(--dark2); border: 1px solid var(--gold-border); border-top-width: 3px; padding: 44px; }
        .att-icon { font-size: 2.6rem; margin-bottom: 14px; }
        .att-sub { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
        .att-title { font-family: var(--font-display); font-size: 2rem; font-weight: 400; color: var(--white); margin-bottom: 18px; }
        .att-desc { font-size: 0.86rem; font-weight: 300; color: var(--white-dim); line-height: 1.8; margin-bottom: 24px; }
        .att-badge { display: inline-block; padding: 5px 14px; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: #fff; }
        .att-value { background: var(--dark3); padding: 28px; border: 1px solid rgba(139,92,246,0.15); border-radius: 8px; }
        .av-header { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
        .av-row { padding: 14px 0; border-bottom: 1px solid rgba(15,23,42,0.07); }
        .av-stat { font-family: var(--font-display); font-size: 1.8rem; color: var(--gold); font-weight: 400; }
        .av-label { font-size: 0.68rem; color: var(--white-dim); margin-top: 3px; font-weight: 300; }
        @media (max-width: 1024px) { .att-layout { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────── EVENTS ── */
export function Events({ onNavigate }) {
  return (
    <div className="section ev-section">
      <div className="ev-layout">
        <div>
          <motion.div {...f(0)} className="section-label">Events & Venue Platform</motion.div>
          <motion.div {...f(0.06)} className="gold-line" />
          <motion.h2 {...f(0.1)} className="section-title">
            The World's<br /><em>Stage.</em>
          </motion.h2>
          <motion.p {...f(0.16)} className="section-body">
            The Dubai Mall has hosted world premieres, global brand launches, FIFA events, and New Year's Eve celebrations attended by hundreds of thousands. Every event here is a global media moment.
          </motion.p>

          <motion.div {...f(0.22)} className="ev-highlights">
            <div className="evh-label">Notable Event Highlights</div>
            {mall.events.pastHighlights.map((h, i) => (
              <div key={i} className="evh-row">
                <span className="evh-dot" />
                <span>{h}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...f(0.32)} style={{ marginTop: 28, display: "flex", gap: 14 }}>
            <button className="btn-primary" onClick={() => onNavigate("contact")}>Book a Venue →</button>
            <button className="btn-outline" onClick={() => onNavigate("sponsorship")}>View Sponsorship</button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ev-venues-label">Venues & Capacities</div>
          <div className="ev-venues-grid">
            {mall.events.venues.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="ev-venue"
              >
                <div className="ev-cap">{v.capacity}</div>
                <div className="ev-name">{v.name}</div>
                <div className="ev-type">{v.type}</div>
              </motion.div>
            ))}
            <div className="ev-total">
              <div className="evt-label">Total Capacity</div>
              <div className="evt-value">105,000+</div>
              <div className="evt-sub">across all venues</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .ev-section { background: linear-gradient(135deg, var(--dark) 0%, var(--black) 100%); }
        .ev-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; min-height: calc(100vh - 200px); }
        .ev-highlights { margin-top: 24px; padding: 22px; border: 1px solid var(--gold-border); background: var(--gold-pale); }
        .evh-label { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px; }
        .evh-row { display: flex; align-items: center; gap: 10px; font-size: 0.76rem; color: var(--white-dim); font-weight: 300; padding: 5px 0; }
        .evh-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }
        .ev-venues-label { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
        .ev-venues-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .ev-venue { background: var(--dark2); border: 1px solid var(--gold-border); padding: 24px 20px; transition: var(--transition); }
        .ev-venue:hover { border-color: var(--gold); transform: translateY(-3px); }
        .ev-cap { font-family: var(--font-display); font-size: 1.8rem; color: var(--gold); font-weight: 400; }
        .ev-name { font-size: 0.76rem; font-weight: 600; color: var(--white); margin: 6px 0 4px; letter-spacing: 0.04em; }
        .ev-type { font-size: 0.65rem; color: var(--white-dim); font-style: italic; font-weight: 300; }
        .ev-total { grid-column: span 2; background: var(--gold); padding: 22px; text-align: center; }
        .evt-label { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(15,23,42,0.6); }
        .evt-value { font-family: var(--font-display); font-size: 2.8rem; color: var(--black); font-weight: 400; }
        .evt-sub { font-size: 0.65rem; color: rgba(15,23,42,0.6); margin-top: 2px; }
        @media (max-width: 1024px) { .ev-layout { grid-template-columns: 1fr; gap: 40px; } }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────── SPONSORSHIP ── */
export function Sponsorship({ onNavigate }) {
  return (
    <div className="section sp-section">
      <motion.div {...f(0)} className="section-label">Sponsorship & Brand Partnerships</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        Your Brand.<br /><em>The World's Stage.</em>
      </motion.h2>
      <motion.p {...f(0.16)} className="section-body" style={{ marginBottom: 40 }}>
        A partnership with The Dubai Mall gives your brand unparalleled access to 105 million annual visitors from 190+ countries — the most globally diverse audience in retail.
      </motion.p>

      <motion.div {...f(0.22)} className="sp-tiers">
        {mall.sponsorship.tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 + i * 0.1, duration: 0.6 }}
            className={`sp-tier ${i === 0 ? "sp-featured" : ""}`}
          >
            {i === 0 && <div className="sp-badge">Premier</div>}
            <div className="sp-name">{tier.name}</div>
            <div className="sp-reach">{tier.reach}</div>
            <div className="sp-features">
              {tier.features.map((feat) => (
                <div key={feat} className="sp-feat">
                  <span className="sp-check">✦</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <button
              className={i === 0 ? "btn-primary" : "btn-outline"}
              style={{ width: "100%", marginTop: 20 }}
              onClick={() => onNavigate("contact")}
            >
              Get Package Details
            </button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div {...f(0.5)} className="sp-footer">
        <p>All partnership packages are bespoke. Our team will design a programme that aligns with your brand objectives.</p>
        <button className="btn-primary" onClick={() => onNavigate("contact")}>
          Begin the Conversation →
        </button>
      </motion.div>

      <style>{`
        .sp-section { background: var(--black); }
        .sp-tiers { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px; }
        .sp-tier { background: var(--dark2); border: 1px solid var(--gold-border); padding: 32px 26px; position: relative; transition: var(--transition); }
        .sp-tier:hover { border-color: rgba(139,92,246,0.5); transform: translateY(-4px); }
        .sp-featured { border-color: var(--gold) !important; background: linear-gradient(160deg, var(--dark2), rgba(139,92,246,0.07)); }
        .sp-badge { position: absolute; top: -1px; right: 22px; background: var(--gold); color: var(--black); font-size: 0.52rem; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; padding: 4px 12px; }
        .sp-name { font-family: var(--font-display); font-size: 1.4rem; font-weight: 400; color: var(--white); margin-bottom: 7px; }
        .sp-reach { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; color: var(--gold); margin-bottom: 22px; text-transform: uppercase; }
        .sp-features { display: flex; flex-direction: column; gap: 9px; }
        .sp-feat { display: flex; gap: 9px; font-size: 0.76rem; color: var(--white-dim); font-weight: 300; line-height: 1.4; }
        .sp-check { color: var(--gold); font-size: 0.6rem; margin-top: 2px; flex-shrink: 0; }
        .sp-footer { display: flex; align-items: center; justify-content: space-between; padding: 24px 28px; border: 1px solid var(--gold-border); background: var(--gold-pale); gap: 20px; }
        .sp-footer p { font-size: 0.82rem; color: var(--white-dim); font-style: italic; font-weight: 300; }
        @media (max-width: 1024px) { .sp-tiers { grid-template-columns: 1fr; } .sp-footer { flex-direction: column; } }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────── LEASING ── */
export function Leasing({ onNavigate }) {
  return (
    <div className="section ls-section">
      <motion.div {...f(0)} className="section-label">Retail Leasing</motion.div>
      <motion.div {...f(0.06)} className="gold-line" />
      <motion.h2 {...f(0.1)} className="section-title">
        Secure Your Position<br />at the <em>Centre of the World.</em>
      </motion.h2>

      <div className="ls-grid">
        {mall.leasing.map((l, i) => (
          <motion.div
            key={l.type}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 + i * 0.1, duration: 0.6 }}
            className="ls-card"
          >
            <div className="ls-accent" style={{ background: l.color }} />
            <div className="ls-icon">{l.icon}</div>
            <div className="ls-type">{l.type}</div>
            <p className="ls-desc">{l.description}</p>
            <button className="btn-outline ls-btn" onClick={() => onNavigate("contact")}>
              {l.cta} →
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div {...f(0.5)} className="ls-footer">
        {[
          { v: "105M+", l: "Visitors/Year" },
          { v: "AED 850+", l: "Median Spend" },
          { v: "4hr+", l: "Avg Dwell Time" },
          { v: "70%", l: "International" },
        ].map((s) => (
          <div key={s.l} className="ls-stat">
            <div className="ls-sv">{s.v}</div>
            <div className="ls-sl">{s.l}</div>
          </div>
        ))}
        <div className="ls-footer-cta">
          <button className="btn-primary" onClick={() => onNavigate("contact")}>
            Contact Leasing Team
          </button>
        </div>
      </motion.div>

      <style>{`
        .ls-section { background: linear-gradient(135deg, var(--black), var(--dark2)); }
        .ls-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin: 36px 0 24px; }
        .ls-card { background: var(--dark2); border: 1px solid rgba(139,92,246,0.15); padding: 28px 22px; position: relative; overflow: hidden; transition: var(--transition); border-radius: 8px; box-shadow: 0 2px 12px rgba(15,23,42,0.05); }
        .ls-card:hover { transform: translateY(-5px); border-color: rgba(139,92,246,0.4); box-shadow: 0 4px 24px rgba(139,92,246,0.1); }
        .ls-accent { height: 3px; width: 100%; position: absolute; top: 0; left: 0; }
        .ls-icon { font-size: 1.6rem; margin-bottom: 12px; }
        .ls-type { font-family: var(--font-display); font-size: 1.3rem; font-weight: 400; color: var(--white); margin-bottom: 12px; }
        .ls-desc { font-size: 0.76rem; font-weight: 300; color: var(--white-dim); line-height: 1.7; margin-bottom: 22px; }
        .ls-btn { width: 100%; font-size: 0.58rem; padding: 10px 14px; }
        .ls-footer { display: flex; align-items: center; border: 1px solid var(--gold-border); background: var(--gold-pale); overflow: hidden; }
        .ls-stat { padding: 22px 32px; text-align: center; border-right: 1px solid var(--gold-border); }
        .ls-sv { font-family: var(--font-display); font-size: 2.2rem; color: var(--gold); font-weight: 400; }
        .ls-sl { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--white-dim); margin-top: 4px; }
        .ls-footer-cta { margin-left: auto; padding: 22px 28px; }
        @media (max-width: 1024px) { .ls-grid { grid-template-columns: repeat(2, 1fr); } .ls-footer { flex-wrap: wrap; } .ls-footer-cta { width: 100%; border-top: 1px solid var(--gold-border); } }
        @media (max-width: 768px) { .ls-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────── CONTACT ── */
export function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", interest: "", message: "" });
  const [done, setDone] = useState(false);

  const submit = () => {
    if (!form.name || !form.email) return;
    setDone(true);
  };

  return (
    <div className="section ct-section">
      <div className="ct-layout">
        <div>
          <motion.div {...f(0)} className="section-label">Contact</motion.div>
          <motion.div {...f(0.06)} className="gold-line" />
          <motion.h2 {...f(0.1)} className="section-title">
            Let's Create<br />Something <em>Extraordinary.</em>
          </motion.h2>
          <motion.p {...f(0.16)} className="section-body">
            Whether you are exploring a flagship lease, a global sponsorship, or a landmark event — our team is ready to design something exceptional with you.
          </motion.p>

          <motion.div {...f(0.22)} className="ct-contacts">
            {[
              { l: "Retail Leasing", v: "leasing@thedubaimall.com" },
              { l: "Brand Partnerships", v: "partnerships@thedubaimall.com" },
              { l: "Events & Venues", v: "events@thedubaimall.com" },
              { l: "Address", v: "Financial Centre Rd, Downtown Dubai, UAE" },
            ].map((c) => (
              <div key={c.l} className="ct-contact">
                <div className="ctc-label">{c.l}</div>
                <div className="ctc-value">{c.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="ct-form-wrap"
        >
          {done ? (
            <div className="ct-ty">
              <div className="ct-ty-check">✓</div>
              <div className="ct-ty-title">Thank You, {form.name}</div>
              <p>A member of our team will be in touch within 24 hours.</p>
            </div>
          ) : (
            <div className="ct-form">
              <div className="ct-form-title">Request Information</div>
              <div className="ct-row2">
                <div className="ct-field">
                  <label>Full Name *</label>
                  <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
                </div>
                <div className="ct-field">
                  <label>Company</label>
                  <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Brand or agency" />
                </div>
              </div>
              <div className="ct-field">
                <label>Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@company.com" />
              </div>
              <div className="ct-field">
                <label>Enquiry Type</label>
                <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                  <option value="">Select…</option>
                  <option value="fashion">Fashion Avenue Flagship</option>
                  <option value="retail">Retail Leasing</option>
                  <option value="popup">Pop-Up Activation</option>
                  <option value="sponsorship">Sponsorship / Partnership</option>
                  <option value="events">Event / Venue Booking</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="ct-field">
                <label>Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your opportunity…" rows={4} />
              </div>
              <button className="btn-primary" style={{ width: "100%", padding: "15px" }} onClick={submit}>
                Submit Enquiry
              </button>
            </div>
          )}
        </motion.div>
      </div>

      <style>{`
        .ct-section { background: var(--black); }
        .ct-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; min-height: calc(100vh - 200px); }
        .ct-contacts { margin-top: 32px; display: flex; flex-direction: column; }
        .ct-contact { padding: 16px 0; border-bottom: 1px solid rgba(15,23,42,0.07); }
        .ctc-label { font-size: 0.55rem; font-weight: 700; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); margin-bottom: 3px; }
        .ctc-value { font-size: 0.82rem; color: var(--white-dim); font-weight: 300; }
        .ct-form-wrap { background: var(--dark2); border: 1px solid var(--gold-border); padding: 38px; }
        .ct-form-title { font-family: var(--font-display); font-size: 1.3rem; color: var(--white); margin-bottom: 26px; font-weight: 400; }
        .ct-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .ct-field { margin-bottom: 18px; }
        .ct-field label { display: block; font-size: 0.55rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 7px; }
        .ct-field input, .ct-field select, .ct-field textarea { width: 100%; background: var(--dark3); border: 1px solid rgba(15,23,42,0.12); padding: 11px 15px; color: var(--white); font-family: var(--font-body); font-size: 0.8rem; font-weight: 300; outline: none; transition: var(--transition); resize: none; border-radius: 4px; }
        .ct-field input:focus, .ct-field select:focus, .ct-field textarea:focus { border-color: var(--gold); }
        .ct-field input::placeholder, .ct-field textarea::placeholder { color: rgba(15,23,42,0.35); }
        .ct-field select option { background: var(--dark2); }
        .ct-ty { text-align: center; padding: 70px 20px; }
        .ct-ty-check { width: 56px; height: 56px; border-radius: 50%; background: var(--gold); color: var(--black); font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
        .ct-ty-title { font-family: var(--font-display); font-size: 1.8rem; color: var(--white); margin-bottom: 12px; }
        .ct-ty p { font-size: 0.82rem; color: var(--white-dim); font-weight: 300; line-height: 1.7; }
        @media (max-width: 1024px) { .ct-layout { grid-template-columns: 1fr; gap: 40px; } .ct-row2 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
