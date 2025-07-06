import React, { useState } from 'react'
import axios from 'axios'

export default function ChatBox({ problem, code }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = async () => {
    const res = await axios.post('http://localhost:5000/api/chat', {
      message: input,
      problem,
      code
    })
    setMessages([
      ...messages,
      { role: 'user', text: input },
      { role: 'bot', text: res.data.reply }
    ])
    setInput('')
  }

  return (
    <div>
      <div style={{ height: '150px', overflowY: 'auto', border: '1px solid #ccc', padding: '0.5rem' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <strong>{msg.role === 'user' ? 'You' : 'Buddy'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        style={{ width: '80%' }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}