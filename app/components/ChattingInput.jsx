import React, { useState } from "react";

export default function ChattingInput() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    console.log(input);
  };
  return (
    <>
      <div className="flex items-center gap-2 p-3 border-t">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </>
  );
}
