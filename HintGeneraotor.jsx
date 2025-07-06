import React, { useState } from 'react'
import axios from 'axios'

export default function HintBox({ problem }) {
  const [hints, setHints] = useState([])
  const [loading, setLoading] = useState(false)

  const getHint = async () => {
    setLoading(true)
    const res = await axios.post('http://localhost:5000/api/hint', { problem })
    setHints([...hints, res.data.hint])
    setLoading(false)
  }

  return (
    <div>
      <button onClick={getHint} disabled={loading || !problem}>
        {loading ? 'Loading...' : 'Get Hint'}
      </button>
      <ul>
        {hints.map((hint, i) => (
          <li key={i}>{hint}</li>
        ))}
      </ul>
    </div>
  )
}