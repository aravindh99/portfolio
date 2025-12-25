import { useState, useEffect, useRef } from "react";
import catWebp from "../assets/cat.webp";
import cat1Webp from "../assets/cat1.webp";
import aravindhMd from "../assets/aravindh.md?raw";
import { HfInference } from "@huggingface/inference";

const INITIAL_PROMPT = "Hey! I'm Aravindh's AI sidekick. Ask me anything about his work!";
const HF_API_TOKEN = import.meta.env.VITE_HF_API_TOKEN;


const SYSTEM_PROMPT = `You are Aravindh's playful and witty AI portfolio assistant.
Style: Playful, fun, and short (1 sentence max). Use emojis to vibe! ✨
Fallbacks: "My circuits are fuzzy on that 😵‍💫 check the GitHub!"
Context: Use the provided markdown profile for facts.`;

const hf = new HfInference(HF_API_TOKEN);

export default function FloatingAiChat() {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState(INITIAL_PROMPT);
  const [typedText, setTypedText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);

  const [theme, setTheme] = useState("dark");
  const [showMain, setShowMain] = useState(false);
  const inputRef = useRef(null);

  // Theme detection
  useEffect(() => {
    function updateTheme() {
      const root = document.querySelector(".app-root");
      setTheme(root?.classList.contains("light") ? "light" : "dark");
    }
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    const root = document.querySelector(".app-root");
    root && observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Entrance
  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Text Typing Effect
  useEffect(() => {
    if (!reply) return;
    let i = 0;
    setTypedText("");
    const interval = setInterval(() => {
      setTypedText(reply.slice(0, i + 1));
      i++;
      if (i > reply.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [reply]);

  // Speech Synthesis
  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    // Remove emojis for speech
    const cleanText = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.volume = 1;
    utterance.rate = 1.1;
    utterance.pitch = 1;
    // Try to find a "cool" voice if possible, otherwise default
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v => v.name.includes("Google US English") || v.name.includes("Microsoft Zira"));
    if (preferred) utterance.voice = preferred;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  async function askBot(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setReply("Thinking...");

    try {
      const response = await hf.chatCompletion({
        model: "Qwen/Qwen2.5-72B-Instruct",
        messages: [
          { role: "system", content: SYSTEM_PROMPT + "\n\nContext:\n" + aravindhMd },
          { role: "user", content: question }
        ],
        max_tokens: 300,
      });
      const answer = response.choices[0].message.content;
      setReply(answer);
      speak(answer);
    } catch (err) {
      setReply("My circuits are jammed! Try again later.");
      console.error(err);
    } finally {
      setLoading(false);
      setQuestion("");
    }
  }

  const catImg = theme === "light" ? catWebp : cat1Webp;
  const [isMinimized, setIsMinimized] = useState(false);

  // Minimized View (Floating Avatar)
  if (isMinimized) {
    return (
      <div
        className="floating-ai-minimized anim-scale-up"
        onClick={() => setIsMinimized(false)}
        style={{
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: 2000,
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
        }}
        title="Click to Expand"
      >
        <div style={{ position: "relative" }}>
          <img
            src={catImg}
            alt="AI"
            style={{
              width: "60px", height: "60px", objectFit: "contain",
              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
              transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1) rotate(5deg)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1) rotate(0deg)"}
          />
          {loading && (
            <span style={{
              position: "absolute", top: 0, right: 0,
              width: "12px", height: "12px", background: "#eab308",
              borderRadius: "50%", border: "2px solid var(--surface)"
            }} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`floating-ai-chat-new ${showMain ? "anim-scale-up" : ""}`} style={{ opacity: showMain ? 1 : 0 }}>
      {/* Sleek Glass Panel */}
      <div className="glass-panel" style={{
        padding: "1.5rem",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }}>

        {/* Header / Status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ position: "relative" }}>
              <img
                src={catImg}
                alt="AI"
                style={{ width: "80px", height: "auto", objectFit: "contain" }}
                className={isSpeaking ? "anim-vibrate" : ""}
              />
            </div>
            <span style={{ fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.5px", opacity: 0.8 }}>
              {loading ? "PROCESSING..." : "ONLINE"}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {/* Minimize Button */}
            <button
              onClick={() => setIsMinimized(true)}
              title="Minimize Chat"
              style={{
                background: "none", border: "1px solid var(--border)", borderRadius: "50%",
                width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "var(--text)", opacity: 0.7,
                fontSize: "0.9rem", fontWeight: "bold"
              }}
            >
              --
            </button>

            {/* Speaker Button */}
            <button
              onClick={() => window.speechSynthesis.cancel()}
              title="Stop Speaking"
              style={{
                background: "none",
                border: "1px solid var(--border)",
                borderRadius: "50%",
                width: "30px", height: "30px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                opacity: isSpeaking ? 1 : 0.3,
                fontSize: "1rem",
                color: "var(--text)",
                transition: "all 0.2s"
              }}
              aria-label="Stop speaking"
            >
              {isSpeaking ? "🔊" : "🔇"}
            </button>
          </div>
        </div>

        {/* Dynamic Response Area */}
        <div style={{
          minHeight: "60px",
          fontSize: "0.95rem",
          lineHeight: "1.5",
          color: "var(--text)",
          padding: "0.5rem 0",
          borderBottom: "1px solid var(--glass-border)"
        }}>
          {typedText}
          {!typedText && <span style={{ opacity: 0.4 }}>Type a command...</span>}
        </div>

        {/* Input Field */}
        <form onSubmit={askBot} style={{ position: "relative" }}>
          <input
            ref={inputRef}
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder="Ask anything..."
            style={{
              width: "100%",
              background: "rgba(0,0,0,0.2)",
              border: "none",
              borderRadius: "var(--radius-sm)",
              padding: "12px 16px",
              color: "var(--text)",
              outline: "none",
              fontFamily: "inherit"
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "var(--accent)",
              color: "var(--bg-dark)",
              border: "none",
              borderRadius: "4px",
              padding: "4px 10px",
              fontWeight: "bold",
              cursor: "pointer",
              opacity: loading ? 0.7 : 1
            }}
          >
            ⏎
          </button>
        </form>
      </div>
    </div>
  );
}
