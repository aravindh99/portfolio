import { useState, useEffect, useRef } from "react";
import catWebp from "../assets/cat.webp";
import cat1Webp from "../assets/cat1.webp";
import aravindhMd from "../assets/aravindh.md?raw";
import { HfInference } from "@huggingface/inference";

// Initial prompt shown before any question
const INITIAL_PROMPT = "Hey there! I'm Aravindh's virtual sidekick 😉. Curious about him? Ask me anything!";

// Hugging Face API details
const HF_API_TOKEN = import.meta.env.VITE_HF_API_TOKEN;
const SYSTEM_PROMPT = `You are an AI assistant for Aravindh's portfolio website.Limit your answers to 1 short sentence only, unless absolutely necessary.If question is hi:
reply:
hey hey 👋 how's it going?
Or:
hi! I'm Aravindh's little AI buddy — nice to meet ya.
🎯 Bonus Tip: Add personality quirks
You can spice things up by giving the bot some habits:
Uses emojis casually 😄
Speaks in short bursts
Has a playful intro line for first-time users`;
const hf = new HfInference(HF_API_TOKEN);



export default function FloatingAiChat() {
  // Chat state
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState(INITIAL_PROMPT);
  const [typedText, setTypedText] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  // Theme & UI animation
  const [theme, setTheme] = useState("dark");
  const [showMain, setShowMain] = useState(false);

  const inputRef = useRef(null);
  const isFirstPrompt = useRef(true);

  // 1. Theme detection
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

  // 2. Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 3. Typing animation for replies
  useEffect(() => {
    let delay = isFirstPrompt.current ? 2000 : 0;
    setInputDisabled(true);
    const timeout = setTimeout(() => {
      let i = 0;
      setTypedText("");
      const interval = setInterval(() => {
        setTypedText(reply.slice(0, i + 1));
        i++;
        if (i >= reply.length) {
          clearInterval(interval);
          setInputDisabled(false);
        }
      }, 18); // Faster typing speed
    }, delay);
    return () => {
      setInputDisabled(false);
      clearTimeout(timeout);
    };
  }, [reply, showMain]);

  // Replace askBot with a placeholder reply
  async function askBot(e) {
    e.preventDefault();
    if (!question.trim()) return;
    isFirstPrompt.current = false;
    setReply("Thinking…");
    setTypedText("");
    setQuestion("");

    try {
      const response = await hf.chatCompletion({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
          { role: "system", content: SYSTEM_PROMPT + "\n\n" + aravindhMd },
          { role: "user", content: question }
        ],
        max_tokens: 512,
      });
      setReply(response.choices[0].message.content);
    } catch (err) {
      setReply("Sorry, something went wrong.");
      console.error(err);
    }
  }

  const catImg = theme === "light" ? catWebp : cat1Webp;

  return (
    <div className={`floating-ai-chat-new${showMain ? " visible" : ""}`}>
      <form className="ai-chat-form-new" onSubmit={askBot} autoComplete="off">
        <input
          ref={inputRef}
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="Ask me anything about Aravindh…"
          className="ai-chat-input-new"
          autoComplete="off"
          disabled={inputDisabled}
        />
        <button className="ai-chat-send-new" type="submit" disabled={inputDisabled}>Ask</button>
      </form>
      <div className="ai-chat-row">
        <img src={catImg} alt="AI Assistant" className="ai-chat-avatar-new" />
        <span className="ai-chat-response-new">{typedText}</span>
      </div>
    </div>
  );
}
