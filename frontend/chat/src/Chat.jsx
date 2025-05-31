// Chat.jsx
import React, { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);     // All chat messages
  const [input, setInput] = useState("");           // Input field value
  const socketRef = useRef(null);                   // WebSocket instance

  useEffect(() => {
    // Connect to WebSocket server
    socketRef.current = new WebSocket("ws://localhost:8080");

    // Handle incoming messages
    socketRef.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, `Server: ${event.data}`]);
    };

    // Clean up WebSocket connection on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  // Handle message send
  const sendMessage = () => {
    if (input.trim() !== "") {
      socketRef.current.send(input);
      setMessages((prevMessages) => [...prevMessages, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Anonymous Chat</h2>

      <div className="h-64 overflow-y-scroll border p-2 mb-4 bg-gray-50 rounded">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
