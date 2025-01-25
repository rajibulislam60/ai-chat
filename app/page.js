"use client";

import ChattingInput from "./components/ChattingInput";
import ChattingMassege from "./components/ChattingMassege";

export default function Home({ messages }) {
  return (
    <>
      <ChattingInput />
      <div>
        {messages.map((msg, id) => (
          <ChattingMassege
            key={id}
            message={msg.content}
            isAIReply={msg.isAIReply}
          />
        ))}
      </div>
    </>
  );
}
