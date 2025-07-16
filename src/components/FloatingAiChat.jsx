import { useState, useEffect, useRef } from "react";
import catWebp from "../assets/cat.webp";
import cat1Webp from "../assets/cat1.webp";

const INITIAL_PROMPT = "Are you looking for something? Ask anything about Aravindh.";

export default function FloatingAiChat() {
  const [question, setQuestion] = useState("");
  const [theme, setTheme] = useState("dark");
  const [typedText, setTypedText] = useState("");
  const [showMain, setShowMain] = useState(false);
  const [reply, setReply] = useState(INITIAL_PROMPT); // This is the current reply to type
  const inputRef = useRef(null);
  const isFirstPrompt = useRef(true);

  // Theme detection
  useEffect(() => {
    function updateTheme() {
      const root = document.querySelector('.app-root');
      if (root && root.classList.contains('light')) setTheme('light');
      else setTheme('dark');
    }
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    const root = document.querySelector('.app-root');
    if (root) observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Animate everything together from bottom
  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation for prompt/reply
  useEffect(() => {
    let delay = 0;
    if (isFirstPrompt.current) delay = 2000;
    const timeout = setTimeout(() => {
      let i = 0;
      setTypedText("");
      const interval = setInterval(() => {
        setTypedText(reply.slice(0, i + 1));
        i++;
        if (i === reply.length) clearInterval(interval);
      }, 38);
    }, delay);
    return () => clearTimeout(timeout);
  }, [reply, showMain]);

  // Simulate AI reply for demo
  async function askBot(e) {
    e.preventDefault();
    if (!question.trim()) return;
    isFirstPrompt.current = false;
    setTypedText("");
    setTimeout(() => {
      const newReply = "This is a demo AI reply. It skhfwek";
      setReply(newReply);
    }, 0);
    setQuestion("");
  }

  const catImg = theme === 'light' ? catWebp : cat1Webp;

  return (
    <div className={`floating-ai-chat-new${showMain ? " visible" : ""}`}>
      <form
        className="ai-chat-form-new"
        onSubmit={askBot}
        autoComplete="off"
      >
        <input
          ref={inputRef}
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Hi, how're you..."
          className="ai-chat-input-new"
          autoComplete="off"
        />
        <button className="ai-chat-send-new" type="submit">Ask</button>
      </form>
      <div className="ai-chat-row">
        <img
          src={catImg}
          alt="AI Assistant"
          className="ai-chat-avatar-new"
        />
        <span className="ai-chat-response-new">{typedText}</span>
      </div>
    </div>
  );
} 