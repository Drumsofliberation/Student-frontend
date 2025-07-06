import React, { useState } from 'react'
import ChatBox from './ChatComponent'
import HintBox from './HintGeneraotor'

export default function App() {
  const [problem, setProblem] = useState('')
  const [code, setCode] = useState('')

  return (
    <div style={{ display: 'grid', gap: '1rem', padding: '1rem' }}>
      <div>
        <h2>Problem Statement</h2>
        <textarea
          rows={6}
          style={{ width: '100%' }}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
        />
        <HintBox problem={problem} />
      </div>

      <div>
        <h2>Your Code</h2>
        <textarea
          rows={10}
          style={{ width: '100%', fontFamily: 'monospace' }}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <div>
        <h2>Chat with Buddy</h2>
        <ChatBox problem={problem} code={code} />
      </div>
    </div>
  )
}