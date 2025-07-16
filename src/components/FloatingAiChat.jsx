import { useState, useEffect, useRef } from "react";
import catWebp from "../assets/cat.webp";

export default function FloatingAiChat() {
  const [question, setQuestion] = useState("");
  // Hardcode a default reply for style preview
  const [response, setResponse] = useState("Hi! I'm your AI assistant. Ask me anything about Aravindh, and I'll do my best to help!\nThis is a multi-line example to show the style and color.");
  const [catVisible, setCatVisible] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Fade in cat, then input
    const catTimer = setTimeout(() => setCatVisible(true), 400);
    const inputTimer = setTimeout(() => {
      setInputVisible(true);
      inputRef.current?.focus();
    }, 1100);
    return () => {
      clearTimeout(catTimer);
      clearTimeout(inputTimer);
    };
  }, []);

  async function askBot(e) {
    e.preventDefault();
    if (!question.trim()) return;
    setResponse("...");
    // Uncomment below to use backend
    // const res = await fetch("http://localhost:3001/ask", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ question }),
    // });
    // const data = await res.json();
    // setResponse(data.response);
  }

  return (
    <div className={`floating-ai-chat minimal`} style={{ zIndex: 9999 }}>
      <img
        src={catWebp}
        alt="AI Assistant"
        className={`ai-chat-avatar only-cat${catVisible ? " visible" : ""}`}
      />
      <form
        className={`ai-chat-form minimal${inputVisible ? " visible" : ""}`}
        onSubmit={askBot}
        style={{ marginTop: catVisible ? 12 : 0 }}
        autoComplete="off"
      >
        <input
          ref={inputRef}
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask me about Aravindh..."
          className="ai-chat-input minimal"
          autoComplete="off"
        />
        <button className="ai-chat-send minimal" type="submit">Send</button>
      </form>
      {response && (
        <div className="ai-chat-response minimal">
          {response}
        </div>
      )}
    </div>
  );
} 