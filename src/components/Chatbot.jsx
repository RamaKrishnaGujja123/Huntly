import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("huntlyChat");
    return stored
      ? JSON.parse(stored)
      : [
          {
            sender: "bot",
            text: "👋 Hi there! I'm HuntlyTech Assistant. How can I help you today?",
            time: new Date().toLocaleTimeString(),
          },
        ];
  });
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("huntlyChat", JSON.stringify(messages));
  }, [messages]);

  // Auto-focus input on open
  useEffect(() => {
    if (chatOpen) inputRef.current?.focus();
  }, [chatOpen]);

  // Escape key closes chat
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setChatOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const toggleChat = () => {
    setChatOpen((prev) => !prev);
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = {
      sender: "user",
      text: trimmed,
      time: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: getBotResponse(trimmed),
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const getBotResponse = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("hi") || text.includes("hello") || text.includes("hey"))
      return "Hello! 😊 How can I assist you with HuntlyTech today?";

    if (text.includes("pricing") || text.includes("price") || text.includes("cost"))
      return "💸 Our Starter plan is $29/month. Pro is $79/month. Enterprise pricing is custom.";

    if (text.includes("feature") || text.includes("capabilities"))
      return "✨ We offer AI job matching, automated resume parsing, team collaboration tools, and analytics dashboards.";

    if (text.includes("trial") || text.includes("demo"))
      return "🚀 You can start a free trial anytime or book a live demo on our homepage.";

    if (text.includes("contact") || text.includes("support") || text.includes("help"))
      return "📬 You can reach support via the contact form or email: support@huntlytech.com";

    if (text.includes("job") || text.includes("career"))
      return "👩‍💻 We’re hiring! Check our Careers page to explore open roles.";

    if (text.includes("about") || text.includes("company"))
      return "🏢 HuntlyTech is a next-gen hiring automation platform for modern teams.";

    if (text.includes("team") || text.includes("employees"))
      return "👥 We're a growing team of passionate engineers, designers, and hiring experts.";

    if (text.includes("location") || text.includes("office"))
      return "🌎 We’re a remote-first company with headquarters in New York City.";

    if (text.includes("thanks") || text.includes("thank you"))
      return "You're welcome! Let me know if you have any more questions 😊";

    return "🤖 I'm still learning. Try asking about pricing, features, jobs, or support!";
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        maxWidth: 360,
        fontFamily: "'Inter', sans-serif",
        zIndex: 9999,
      }}
    >
      {chatOpen ? (
        <div
          role="dialog"
          aria-label="HuntlyTech Chatbot"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "70vh",
            backgroundColor: "#fff",
            borderRadius: 12,
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#6366f1",
              color: "#fff",
              padding: 12,
              fontWeight: "600",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            HuntlyTech Assistant
            <button
              onClick={toggleChat}
              aria-label="Close chat"
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            role="region"
            aria-label="Messages"
            style={{
              flex: 1,
              padding: "12px",
              background: "#f9fafb",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#6366f1" : "#e0e7ff",
                  color: msg.sender === "user" ? "#fff" : "#1e293b",
                  padding: "8px 12px",
                  borderRadius: 12,
                  maxWidth: "80%",
                  wordBreak: "break-word",
                }}
              >
                {msg.text}
                <div
                  style={{
                    fontSize: "0.7rem",
                    marginTop: 4,
                    opacity: 0.5,
                    textAlign: "right",
                  }}
                >
                  {msg.time}
                </div>
              </div>
            ))}
            {typing && (
              <div style={{ fontStyle: "italic", fontSize: "0.9rem", color: "#666" }}>
                Assistant is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px",
              display: "flex",
              gap: "8px",
              borderTop: "1px solid #ddd",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              aria-label="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <button
              onClick={sendMessage}
              aria-label="Send"
              style={{
                backgroundColor: "#6366f1",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          aria-label="Open chatbot"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 24,
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
