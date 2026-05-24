import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONTACTS = [
  { label: "Retail Leasing",     value: "leasing@thedubaimall.com" },
  { label: "Brand Partnerships", value: "partnerships@thedubaimall.com" },
  { label: "Events & Venues",    value: "events@thedubaimall.com" },
  { label: "Address",            value: "Financial Centre Rd, Downtown Dubai, UAE" },
];

const FORM_ENDPOINT = "https://formsubmit.co/ajax/n0583230060@gmail.com";
const IS_DEV = window.location.hostname === "localhost";

export default function Contact({ onNavigate }) {
  const [form, setForm] = useState({
    name: "", company: "", email: "", interest: "", message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email) return;
    setStatus("sending");

    // On localhost: simulate success (CORS blocked by FormSubmit — works in production)
    if (IS_DEV) {
      await new Promise((r) => setTimeout(r, 900));
      setStatus("done");
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name:     form.name,
          company:  form.company || "—",
          email:    form.email,
          interest: form.interest || "—",
          message:  form.message || "—",
          _subject: `Dubai Mall Enquiry — ${form.name}${form.company ? ` · ${form.company}` : ""}`,
        }),
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="section ct2-section">
      <div className="ct2-layout">

        {/* ── Left: info ── */}
        <div className="ct2-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} className="section-label ct2-label"
          >Contact</motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.06 }} className="ct2-gold-line"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }} className="ct2-title"
          >
            Let's Create<br />Something <em>Extraordinary.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }} className="ct2-intro"
          >
            Whether you are exploring a flagship lease, a global sponsorship,
            or a landmark event — our team is ready to design something
            exceptional with you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.22 }} className="ct2-contacts"
          >
            {CONTACTS.map((c) => (
              <div key={c.label} className="ct2-contact-item">
                <div className="ct2-contact-label">{c.label}</div>
                <div className="ct2-contact-value">{c.value}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.44 }} className="ct2-footnote"
          >
            <span className="ct2-dot">✦</span>
            <span>All enquiries are responded to within 24 hours.</span>
          </motion.div>
        </div>

        {/* ── Right: form / success ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="ct2-form-wrap"
        >
          <AnimatePresence mode="wait">

            {/* ── Thank-you state ── */}
            {status === "done" ? (
              <motion.div
                key="done"
                className="ct2-ty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Check icon */}
                <motion.div
                  className="ct2-ty-check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>

                {/* Headline */}
                <motion.div
                  className="ct2-ty-headline"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Your Next Chapter<br /><em>Begins Here.</em>
                </motion.div>

                {/* Sub */}
                <motion.p
                  className="ct2-ty-body"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Thank you, <strong>{form.name}</strong>. A member of our
                  partnerships team will be in touch within 24 hours.
                </motion.p>

                {/* Marketing line */}
                <motion.div
                  className="ct2-ty-tag"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.5 }}
                >
                  <span className="ct2-ty-tag-dot" />
                  105M visitors · 190+ countries · One address.
                </motion.div>

                {/* CTAs */}
                <motion.div
                  className="ct2-ty-ctas"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95, duration: 0.5 }}
                >
                  <button className="ct2-ty-btn-primary" onClick={() => onNavigate("events")}>
                    Explore Events →
                  </button>
                  <button className="ct2-ty-btn-outline" onClick={() => onNavigate("attractions")}>
                    View Attractions
                  </button>
                </motion.div>
              </motion.div>

            ) : (
              /* ── Form state ── */
              <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="ct2-form-title">Request Information</div>

                <div className="ct2-row2">
                  <div className="ct2-field">
                    <label>Full Name *</label>
                    <input value={form.name} onChange={set("name")} placeholder="Your name" />
                  </div>
                  <div className="ct2-field">
                    <label>Company</label>
                    <input value={form.company} onChange={set("company")} placeholder="Brand or agency" />
                  </div>
                </div>

                <div className="ct2-field">
                  <label>Email *</label>
                  <input type="email" value={form.email} onChange={set("email")} placeholder="your@company.com" />
                </div>

                <div className="ct2-field">
                  <label>Enquiry Type</label>
                  <select value={form.interest} onChange={set("interest")}>
                    <option value="">Select…</option>
                    <option value="Fashion Avenue Flagship">Fashion Avenue Flagship</option>
                    <option value="Retail Leasing">Retail Leasing</option>
                    <option value="Pop-Up Activation">Pop-Up Activation</option>
                    <option value="Sponsorship / Partnership">Sponsorship / Partnership</option>
                    <option value="Event / Venue Booking">Event / Venue Booking</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="ct2-field">
                  <label>Message</label>
                  <textarea
                    value={form.message} onChange={set("message")}
                    placeholder="Tell us about your opportunity…" rows={4}
                  />
                </div>

                {status === "error" && (
                  <div className="ct2-error">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  className={`ct2-btn-submit ${status === "sending" ? "sending" : ""}`}
                  onClick={submit}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Submit Enquiry"}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      <style>{`
        .ct2-section { background: #0D1117; min-height: 100%; }
        .ct2-label { color: #A78BFA !important; }
        .ct2-gold-line {
          width: 48px; height: 1px;
          background: linear-gradient(to right, #8B5CF6, transparent);
          margin-bottom: 22px;
        }
        .ct2-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.8vw, 3.4rem);
          font-weight: 400; line-height: 1.14;
          color: #F8FAFC; margin-bottom: 18px;
        }
        .ct2-title em {
          font-style: italic;
          background: linear-gradient(135deg, #8B5CF6, #A78BFA);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .ct2-intro {
          font-size: 0.84rem; font-weight: 300; line-height: 1.8;
          color: rgba(248,250,252,0.55); margin-bottom: 32px; max-width: 380px;
        }
        .ct2-layout {
          display: grid; grid-template-columns: 1fr 1.1fr;
          gap: 56px; align-items: start;
        }
        .ct2-left { display: flex; flex-direction: column; }
        .ct2-contacts { display: flex; flex-direction: column; margin-bottom: 32px; }
        .ct2-contact-item { padding: 14px 0; border-bottom: 1px solid rgba(248,250,252,0.06); }
        .ct2-contact-item:last-child { border-bottom: none; }
        .ct2-contact-label {
          font-size: 0.52rem; font-weight: 700; letter-spacing: 0.28em;
          text-transform: uppercase; color: #8B5CF6; margin-bottom: 4px;
        }
        .ct2-contact-value { font-size: 0.8rem; font-weight: 300; color: rgba(248,250,252,0.65); }
        .ct2-footnote {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.7rem; font-weight: 300; color: rgba(248,250,252,0.3); font-style: italic;
        }
        .ct2-dot { color: #8B5CF6; font-size: 0.5rem; flex-shrink: 0; }

        /* ── Form ── */
        .ct2-form-wrap {
          background: #161B22; border: 1px solid rgba(139,92,246,0.2);
          border-radius: 12px; padding: 36px 32px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
          min-height: 480px;
        }
        .ct2-form-title {
          font-family: var(--font-display); font-size: 1.25rem;
          font-weight: 400; color: #F8FAFC; margin-bottom: 26px;
        }
        .ct2-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .ct2-field { margin-bottom: 16px; }
        .ct2-field label {
          display: block; font-size: 0.52rem; font-weight: 700;
          letter-spacing: 0.24em; text-transform: uppercase;
          color: #A78BFA; margin-bottom: 7px;
        }
        .ct2-field input, .ct2-field select, .ct2-field textarea {
          width: 100%; background: rgba(248,250,252,0.04);
          border: 1px solid rgba(248,250,252,0.1); border-radius: 6px;
          padding: 11px 14px; color: #F8FAFC; font-family: var(--font-body);
          font-size: 0.8rem; font-weight: 300; outline: none;
          transition: border-color 0.3s ease; resize: none; box-sizing: border-box;
        }
        .ct2-field input:focus, .ct2-field select:focus, .ct2-field textarea:focus {
          border-color: rgba(139,92,246,0.6);
        }
        .ct2-field input::placeholder, .ct2-field textarea::placeholder {
          color: rgba(248,250,252,0.2);
        }
        .ct2-field select option { background: #161B22; color: #F8FAFC; }
        .ct2-error {
          font-size: 0.72rem; color: #F87171;
          background: rgba(248,113,113,0.08); border: 1px solid rgba(248,113,113,0.2);
          border-radius: 6px; padding: 10px 14px; margin-bottom: 14px;
        }
        .ct2-btn-submit {
          width: 100%; background: linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%);
          color: #fff; border: none; padding: 15px 24px;
          font-family: var(--font-body); font-size: 0.62rem; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer;
          border-radius: 6px; box-shadow: 0 4px 20px rgba(139,92,246,0.4);
          transition: all 0.4s ease; margin-top: 6px;
        }
        .ct2-btn-submit:hover:not(:disabled) {
          box-shadow: 0 6px 28px rgba(139,92,246,0.65); transform: translateY(-2px);
        }
        .ct2-btn-submit.sending { opacity: 0.7; cursor: not-allowed; }

        /* ── Thank-you ── */
        .ct2-ty {
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; text-align: center; padding: 32px 16px;
          min-height: 420px;
        }
        .ct2-ty-check {
          width: 64px; height: 64px; border-radius: 50%;
          background: linear-gradient(135deg, #8B5CF6, #6D28D9);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 28px;
          box-shadow: 0 0 0 12px rgba(139,92,246,0.12), 0 8px 32px rgba(139,92,246,0.4);
        }
        .ct2-ty-headline {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 400; color: #F8FAFC;
          line-height: 1.15; margin-bottom: 18px;
        }
        .ct2-ty-headline em {
          font-style: italic;
          background: linear-gradient(135deg, #8B5CF6, #C4B5FD);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          display: inline-block; padding-bottom: 0.06em;
        }
        .ct2-ty-body {
          font-size: 0.82rem; font-weight: 300; line-height: 1.8;
          color: rgba(248,250,252,0.5); max-width: 300px; margin-bottom: 24px;
        }
        .ct2-ty-body strong { color: rgba(248,250,252,0.8); font-weight: 600; }
        .ct2-ty-tag {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.55rem; font-weight: 600; letter-spacing: 0.22em;
          text-transform: uppercase; color: rgba(139,92,246,0.7);
          margin-bottom: 32px;
        }
        .ct2-ty-tag-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: #8B5CF6; flex-shrink: 0;
        }
        .ct2-ty-ctas { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
        .ct2-ty-btn-primary {
          background: linear-gradient(135deg, #8B5CF6, #6D28D9);
          color: #fff; border: none; padding: 12px 24px;
          font-family: var(--font-body); font-size: 0.6rem; font-weight: 700;
          letter-spacing: 0.16em; text-transform: uppercase; cursor: pointer;
          border-radius: 4px; box-shadow: 0 4px 16px rgba(139,92,246,0.4);
          transition: all 0.3s ease;
        }
        .ct2-ty-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(139,92,246,0.6); }
        .ct2-ty-btn-outline {
          background: transparent; color: rgba(248,250,252,0.6);
          border: 1px solid rgba(248,250,252,0.15); padding: 11px 24px;
          font-family: var(--font-body); font-size: 0.6rem; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase; cursor: pointer;
          border-radius: 4px; transition: all 0.3s ease;
        }
        .ct2-ty-btn-outline:hover { border-color: rgba(139,92,246,0.5); color: #A78BFA; }

        @media (max-width: 1024px) { .ct2-layout { grid-template-columns: 1fr; gap: 36px; } }
        @media (max-width: 768px) {
          .ct2-row2 { grid-template-columns: 1fr; }
          .ct2-form-wrap { padding: 26px 20px; }
          .ct2-intro { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
