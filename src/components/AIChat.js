import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SYSTEM = `You are a luxury sales concierge for The Dubai Mall — the world's most visited retail and entertainment destination, located in the heart of Downtown Dubai adjacent to the Burj Khalifa.

You assist prospective retail tenants, global brand sponsors, and event partners in understanding the extraordinary commercial opportunity that The Dubai Mall represents.

Key facts:
- 5.4 million sq ft, opened 2008, owned by Emaar Properties
- 105 million+ annual visitors — more than any other destination on Earth
- 1,300+ retail outlets, 200+ F&B outlets
- Fashion Avenue: the Middle East's largest luxury mall-within-a-mall (Chanel, LV, Dior, Cartier, Rolex, Hermès, Gucci, Prada)
- Attractions: Dubai Aquarium (world's largest indoor aquarium), Dubai Fountain (world's largest choreographed fountain), Dubai Ice Rink (Olympic-sized), VR Park, KidZania, Reel Cinemas
- Global catchment: 2 billion people within 4 hours by flight
- 70% international visitors; top markets: UAE, KSA, India, UK, USA, Russia, China
- Average dwell time: 4+ hours; median spend: AED 850+ per visit

You speak with the authority of a seasoned luxury real estate professional. You are sophisticated, confident, and focused. Every response should move the conversation toward one of three outcomes:
1. A leasing consultation
2. A sponsorship discussion  
3. An event or venue booking

Be concise (3-4 sentences max), elegant, and always close with a gentle push toward action.`;

export default function AIChat({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to The Dubai Mall. I'm here to help you explore leasing opportunities, sponsorship partnerships, or event bookings at the world's most visited destination. How may I assist you?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM,
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Allow me to connect you with our team directly.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Our team would be delighted to assist you personally. Please use the contact form to reach us." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div
        className="chat-box"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="chat-header">
          <div className="chat-header-text">
            <h3>Sales Concierge</h3>
            <p>The Dubai Mall · Emaar Properties</p>
          </div>
          <button className="chat-close" onClick={onClose}>✕</button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role}`}>
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="chat-msg assistant" style={{ opacity: 0.45 }}>
              Composing…
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask about leasing, events, or sponsorship…"
            disabled={loading}
          />
          <button className="chat-send" onClick={send} disabled={loading}>
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}
