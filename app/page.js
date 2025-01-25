"use client";

import { useState } from "react";
import ChattingInput from "./components/ChattingInput";
import ChattingMassege from "./components/ChattingMassege";

export default function Page() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (messageContent) => {
    const userMessage = { content: messageContent, isAIReply: false };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: messageContent }),
    });

    const aiReply = await response.json();
    setMessages((prev) => [
      ...prev,
      { content: aiReply.reply, isAIReply: true },
    ]);
  };

  return (
    <div className="container">
      <div className="flex flex-col h-screen relative">
        <h1 className="text-[22px] font-bold px-2 py-2 sticky top-0 left-0">
          AI Chat App
        </h1>
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, id) => (
            <ChattingMassege
              key={id}
              message={msg.content}
              isAIReply={msg.isAIReply}
            />
          ))}
        </div>
        <ChattingInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
