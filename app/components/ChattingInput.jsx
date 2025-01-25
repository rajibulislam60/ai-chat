"use client";

import { useState } from "react";

export default function ChattingInput({ onSendMessage }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center gap-2 p-4 border-t">
      <input
        type="text"
        className="flex-1 border rounded-lg p-2"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </div>
  );
}
