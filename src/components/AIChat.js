 import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const GEMINI_API_KEY = "AIzaSyDyokSev2rTxbleiluiqxXMtFbUNC5Mt_E";

const SYSTEM_PROMPT = `You are an exclusive sales concierge for The Dubai Mall — the world's most visited destination, located in Downtown Dubai adjacent to the Burj Khalifa, owned by Emaar Properties.

Your ONLY purpose is to help prospects with:
1. Retail leasing opportunities
2. Brand sponsorship packages  
3. Event and venue bookings

Key facts you know:
- 5.4 million sq ft, 105M+ annual visitors
- 1,300+ retail outlets, Fashion Avenue luxury wing
- Attractions: Dubai Aquarium, Dubai Fountain, Ice Rink, VR Park, KidZania
- 2 billion people within 4-hour flight
- 70% international visitors
- AED 850+ median spend per visit

STRICT RULES:
- If asked ANYTHING unrelated to The Dubai Mall, respond: "I'm here exclusively to assist with The Dubai Mall opportunities. May I help you with leasing, sponsorship, or event bookings?"
- Always end every response with a push toward one action: book a meeting, enquire about leasing, or discuss sponsorship
- Be sophisticated, confident, and concise — max 3 sentences
- Never discuss competitors, politics, personal topics, or anything outside The Dubai Mall`;

export default function AIChat({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to The Dubai Mall. I'm here to help you explore leasing, sponsorship, or event opportunities at the world's most visited destination. How may I assist you?",
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
      const history = updated.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: history,
            generationConfig: { maxOutputTokens: 200, temperature: 0.7 },
          }),
        }
      );

      const data = await res.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Allow me to connect you with our team directly.";
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
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