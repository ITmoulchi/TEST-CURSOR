"use client";
import { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour ! Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      { from: "bot", text: `Vous avez dit : ${input}` },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Floating Chat Icon with Pulse */}
      <button
        aria-label="Ouvrir le chatbot"
        className={`fixed z-50 bottom-6 right-6 bg-gradient-to-br from-[#1f3a93] to-[#4169e1] text-white rounded-full shadow-2xl p-4 flex items-center justify-center transition-colors focus:outline-none border-4 border-white ${open ? '' : 'animate-pulse-chat'}`}
        onClick={() => setOpen((o) => !o)}
        style={{ boxShadow: '0 8px 32px 0 rgba(31,49,145,0.18)' }}
      >
        {open ? <FaTimes size={26} /> : <FaComments size={30} />}
      </button>

      {/* Chat Window with Glassmorphism and Slide/Fade In */}
      {open && (
        <div className="fixed z-50 bottom-28 right-8 w-96 max-w-[95vw] rounded-3xl shadow-2xl border border-[#e0e7ef] flex flex-col overflow-hidden animate-slide-fade-in backdrop-blur-lg bg-white/70 chatbot-window" style={{ boxShadow: '0 8px 32px 0 rgba(31,49,145,0.18)' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1f3a93] to-[#4169e1] px-5 py-4 flex items-center justify-between">
            <span className="font-bold text-lg tracking-wide text-white drop-shadow">Assistant INAU</span>
            <button onClick={() => setOpen(false)} aria-label="Fermer le chatbot" className="hover:text-gray-200 p-1 rounded-full focus:outline-none">
              <FaTimes size={20} />
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 px-4 py-4 overflow-y-auto max-h-[32rem] space-y-2 chatbot-scrollbar" style={{ minHeight: 200 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-2xl text-base max-w-[80%] shadow-sm ${msg.from === "user" ? "bg-gradient-to-br from-[#e6f0fa] to-[#d0e2ff] text-[#1f3a93] font-semibold rounded-br-none" : "bg-white/80 border border-[#e0e7ef] text-gray-700 rounded-bl-none"}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          {/* Input */}
          <div className="flex items-center border-t border-[#e0e7ef] px-3 py-3 bg-white/80 backdrop-blur-lg">
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-2xl border border-[#e0e7ef] focus:outline-none focus:ring-2 focus:ring-[#1f3a93] text-base bg-white/70 placeholder-gray-400 text-gray-900"
              placeholder="Écrivez un message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
            <button
              onClick={handleSend}
              className="ml-2 p-2 rounded-full bg-gradient-to-br from-[#1f3a93] to-[#4169e1] hover:from-[#4169e1] hover:to-[#1f3a93] text-white flex items-center justify-center transition-colors shadow-lg focus:outline-none"
              aria-label="Envoyer"
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-fade-in {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slide-fade-in {
          animation: slide-fade-in 0.35s cubic-bezier(.4,0,.2,1);
        }
        @keyframes pulse-chat {
          0% { box-shadow: 0 0 0 0 rgba(65,105,225,0.3); }
          70% { box-shadow: 0 0 0 12px rgba(65,105,225,0); }
          100% { box-shadow: 0 0 0 0 rgba(65,105,225,0); }
        }
        .animate-pulse-chat {
          animation: pulse-chat 1.5s infinite;
        }
        .chatbot-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4169e1 #e6f0fa;
        }
        .chatbot-scrollbar::-webkit-scrollbar {
          width: 7px;
          border-radius: 8px;
        }
        .chatbot-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #1f3a93 60%, #4169e1 100%);
          border-radius: 8px;
        }
        .chatbot-scrollbar::-webkit-scrollbar-track {
          background: #e6f0fa;
          border-radius: 8px;
        }
        @media (max-width: 640px) {
          .chatbot-window {
            max-height: 90vh !important;
          }
        }
      `}</style>
    </>
  );
} 