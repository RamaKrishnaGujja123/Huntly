import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your HuntlyTech assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");

    setTimeout(() => {
      const response = getBotResponse(trimmed);
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 800);
  };

  const getBotResponse = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("price") || text.includes("cost") || text.includes("pricing")) {
      return "Our plans start at $29/month for Starter. We also offer Professional ($79/month) and Enterprise (custom pricing). Want details?";
    }
    if (text.includes("feature") || text.includes("capability")) {
      return "We provide AI-powered matching, automated screening, analytics dashboard, team collaboration & enterprise security.";
    }
    if (text.includes("demo") || text.includes("trial") || text.includes("try")) {
      return "You can start a free trial or schedule a demo from our homepage!";
    }
    if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
      return "Hello! How can I assist you with HuntlyTech today?";
    }
    if (text.includes("support") || text.includes("help") || text.includes("contact")) {
      return "Contact our support team via email or the contact form on the website.";
    }

    return "Thanks for your message! Ask me about pricing, features, demos, or support.";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, maxWidth: 320, fontFamily: "'Inter', sans-serif", zIndex: 9999 }}>
      {chatOpen ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 12,
            boxShadow: "0 0 12px rgba(99, 102, 241, 0.5)",
            overflow: "hidden",
            backgroundColor: "white",
            height: 400,
            width: "100%",
          }}
          aria-label="Chat window"
        >
          <div
            style={{
              backgroundColor: "#6366f1",
              color: "#fff",
              padding: 12,
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            HuntlyTech Assistant
            <button
              onClick={toggleChat}
              style={{ background: "transparent", border: "none", cursor: "pointer", color: "#fff", fontSize: 18 }}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div
            id="chatMessages"
            style={{
              background: "#f9fafb",
              padding: 12,
              flex: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              color: "#111827",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  maxWidth: "80%",
                  padding: "8px 12px",
                  borderRadius: 12,
                  marginBottom: 8,
                  wordWrap: "break-word",
                  alignSelf: msg.sender === "bot" ? "flex-start" : "flex-end",
                  backgroundColor: msg.sender === "bot" ? "#e0e7ff" : "#6366f1",
                  color: msg.sender === "bot" ? "#1e293b" : "#fff",
                }}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ display: "flex", padding: 12, borderTop: "1px solid #ddd", gap: 8 }}>
            <input
              type="text"
              aria-label="Chat input"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                padding: 8,
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: "1rem",
              }}
            />
            <button
              onClick={sendMessage}
              aria-label="Send message"
              style={{
                backgroundColor: "#6366f1",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          aria-label="Open chat"
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#6366f1",
            border: "none",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(99, 102, 241, 0.5)",
            fontSize: 24,
          }}
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
