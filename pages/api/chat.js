export default function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    // Simulate AI response
    const aiReplies = [
      "Hello! How can I assist you?",
      "That's interesting! Tell me more.",
      "I'm here to help!",
    ];

    const randomReply = aiReplies[Math.floor(Math.random() * aiReplies.length)];

    return res.status(200).json({ reply: randomReply });
  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: "Method not allowed" });
  }
}
