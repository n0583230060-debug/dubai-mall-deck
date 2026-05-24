import { useState } from "react";
import { motion } from "framer-motion";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
});

const CONTACTS = [
  { label: "Retail Leasing",      value: "leasing@thedubaimall.com" },
  { label: "Brand Partnerships",  value: "partnerships@thedubaimall.com" },
  { label: "Events & Venues",     value: "events@thedubaimall.com" },
  { label: "Address",             value: "Financial Centre Rd, Downtown Dubai, UAE" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", interest: "", message: "",
  });
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email) return;
    setDone(true);
  };

  return (
    <div className="section ct2-section">

      <div className="ct2-layout">

        {/* ── Left: info ── */}
        <div className="ct2-left">
          <motion.div {...f(0)} className="section-label ct2-label">Contact</motion.div>
          <motion.div {...f(0.06)} className="ct2-gold-line" />
          <motion.h2 {...f(0.1)} className="ct2-title">
            Let's Create<br />Something <em>Extraordinary.</em>
          </motion.h2>
          <motion.p {...f(0.16)} className="ct2-intro">
            Whether you are exploring a flagship lease, a global sponsorship,
            or a landmark event — our team is ready to design something
            exceptional with you.
          </motion.p>

          <motion.div {...f(0.22)} className="ct2-contacts">
            {CONTACTS.map((c) => (
              <div key={c.label} className="ct2-contact-item">
                <div className="ct2-contact-label">{c.label}</div>
                <div className="ct2-contact-value">{c.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...f(0.44)} className="ct2-footnote">
            <span className="ct2-dot">✦</span>
            <span>All enquiries are responded to within 24 hours.</span>
          </motion.div>
        </div>

        {/* ── Right: form ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="ct2-form-wrap"
        >
          {done ? (
            <div className="ct2-ty">
              <div className="ct2-ty-icon">✓</div>
              <div className="ct2-ty-title">Thank You, {form.name}.</div>
              <p className="ct2-ty-body">
                A member of our partnerships team will be in touch within 24 hours.
                We look forward to creating something exceptional with you.
              </p>
            </div>
          ) : (
            <>
              <div className="ct2-form-title">Request Information</div>

              <div className="ct2-row2">
                <div className="ct2-field">
                  <label>Full Name *</label>
                  <input
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your name"
                  />
                </div>
                <div className="ct2-field">
                  <label>Company</label>
                  <input
                    value={form.company}
                    onChange={set("company")}
                    placeholder="Brand or agency"
                  />
                </div>
              </div>

              <div className="ct2-field">
                <label>Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="your@company.com"
                />
              </div>

              <div className="ct2-field">
                <label>Enquiry Type</label>
                <select value={form.interest} onChange={set("interest")}>
                  <option value="">Select…</option>
                  <option value="fashion">Fashion Avenue Flagship</option>
                  <option value="retail">Retail Leasing</option>
                  <option value="popup">Pop-Up Activation</option>
                  <option value="sponsorship">Sponsorship / Partnership</option>
                  <option value="events">Event / Venue Booking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="ct2-field">
                <label>Message</label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your opportunity…"
                  rows={4}
                />
              </div>

              <button className="ct2-btn-submit" onClick={submit}>
                Submit Enquiry
              </button>
            </>
          )}
        </motion.div>

      </div>

      <style>{`
        /* ── Dark theme ── */
        .ct2-section {
          background: #0D1117;
          min-height: 100%;
        }

        .ct2-label { color: #A78BFA !important; }

        .ct2-gold-line {
          width: 48px;
          height: 1px;
          background: linear-gradient(to right, #8B5CF6, transparent);
          margin-bottom: 22px;
        }

        .ct2-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.8vw, 3.4rem);
          font-weight: 400;
          line-height: 1.14;
          color: #F8FAFC;
          margin-bottom: 18px;
        }
        .ct2-title em {
          font-style: italic;
          background: linear-gradient(135deg, #8B5CF6, #A78BFA);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ct2-intro {
          font-size: 0.84rem;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(248,250,252,0.55);
          margin-bottom: 32px;
          max-width: 380px;
        }

        /* ── Layout ── */
        .ct2-layout {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 56px;
          align-items: start;
        }

        .ct2-left {
          display: flex;
          flex-direction: column;
        }

        /* ── Contact items ── */
        .ct2-contacts {
          display: flex;
          flex-direction: column;
          margin-bottom: 32px;
        }
        .ct2-contact-item {
          padding: 14px 0;
          border-bottom: 1px solid rgba(248,250,252,0.06);
        }
        .ct2-contact-item:last-child { border-bottom: none; }
        .ct2-contact-label {
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8B5CF6;
          margin-bottom: 4px;
        }
        .ct2-contact-value {
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(248,250,252,0.65);
        }

        .ct2-footnote {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.7rem;
          font-weight: 300;
          color: rgba(248,250,252,0.3);
          font-style: italic;
        }
        .ct2-dot {
          color: #8B5CF6;
          font-size: 0.5rem;
          flex-shrink: 0;
        }

        /* ── Form ── */
        .ct2-form-wrap {
          background: #161B22;
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 12px;
          padding: 36px 32px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
        }

        .ct2-form-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 400;
          color: #F8FAFC;
          margin-bottom: 26px;
        }

        .ct2-row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .ct2-field {
          margin-bottom: 16px;
        }
        .ct2-field label {
          display: block;
          font-size: 0.52rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #A78BFA;
          margin-bottom: 7px;
        }
        .ct2-field input,
        .ct2-field select,
        .ct2-field textarea {
          width: 100%;
          background: rgba(248,250,252,0.04);
          border: 1px solid rgba(248,250,252,0.1);
          border-radius: 6px;
          padding: 11px 14px;
          color: #F8FAFC;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 300;
          outline: none;
          transition: border-color 0.3s ease;
          resize: none;
          box-sizing: border-box;
        }
        .ct2-field input:focus,
        .ct2-field select:focus,
        .ct2-field textarea:focus {
          border-color: rgba(139,92,246,0.6);
        }
        .ct2-field input::placeholder,
        .ct2-field textarea::placeholder {
          color: rgba(248,250,252,0.2);
        }
        .ct2-field select option {
          background: #161B22;
          color: #F8FAFC;
        }

        .ct2-btn-submit {
          width: 100%;
          background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff;
          border: none;
          padding: 15px 24px;
          font-family: var(--font-body);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 6px;
          box-shadow: 0 4px 20px rgba(139,92,246,0.4);
          transition: all 0.4s ease;
          margin-top: 6px;
        }
        .ct2-btn-submit:hover {
          box-shadow: 0 6px 28px rgba(139,92,246,0.65);
          transform: translateY(-2px);
        }

        /* ── Thank you state ── */
        .ct2-ty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
          min-height: 340px;
        }
        .ct2-ty-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8B5CF6, #6D28D9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: #fff;
          margin-bottom: 20px;
          box-shadow: 0 4px 20px rgba(139,92,246,0.4);
        }
        .ct2-ty-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 400;
          color: #F8FAFC;
          margin-bottom: 14px;
        }
        .ct2-ty-body {
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(248,250,252,0.5);
          line-height: 1.8;
          max-width: 300px;
        }

        @media (max-width: 1024px) {
          .ct2-layout {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .ct2-intro { max-width: 100%; }
        }
        @media (max-width: 768px) {
          .ct2-row2 { grid-template-columns: 1fr; }
          .ct2-form-wrap { padding: 26px 20px; }
        }
      `}</style>
    </div>
  );
}
