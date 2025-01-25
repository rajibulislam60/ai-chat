import React from "react";

export default function ChattingMassege({ message, isAIReply }) {
  return (
    <div>
      <div
        className={`flex ${isAIReply ? "justify-start" : "justify-end"} my-2`}
      >
        <div
          className={`${
            isAIReply ? "bg-gray-200 text-black" : "bg-teal-500 text-white"
          } p-3 rounded-lg max-w-md`}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
