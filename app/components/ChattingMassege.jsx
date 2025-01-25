"use client";

export default function ChattingMessage({ message, isAIReply }) {
  return (
    <div className={`flex ${isAIReply ? "justify-start" : "justify-end"} mb-4`}>
      <div
        className={`p-3 rounded-lg max-w-xs ${
          isAIReply ? "bg-gray-200 text-black" : "bg-blue-500 text-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
