import React, { useState, useEffect } from 'react'
import { db } from '../services/firebase'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY

const AICompilations = ({ user }) => {
  const [images, setImages] = useState([])
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!user) return

    const fetchImages = async () => {
      const q = query(
        collection(db, 'images'),
        where('uid', '==', user.uid),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      const data = snapshot.docs.map(doc => doc.data())
      setImages(data)
    }

    fetchImages()
  }, [user])

  const generateSummary = async () => {
    setLoading(true)
    setError(null)

    try {
      const captions = images.map(img => img.caption).filter(Boolean).join('. ')
      const prompt = `Summarize the following photo captions into a short paragraph:\n${captions}`

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 150,
        }),
      })

      const data = await response.json()
      if (data.error) {
        throw new Error(data.error.message)
      }

      setSummary(data.choices[0].message.content)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">🤖 AI-Generated Compilations</h2>

      <button
        onClick={generateSummary}
        disabled={loading || images.length === 0}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition mb-4"
      >
        {loading ? 'Generating...' : 'Generate Summary'}
      </button>

      {error && <p className="text-red-500 mb-4">Error: {error}</p>}

      {summary && (
        <div className="mb-6 p-4 border rounded bg-gray-50 whitespace-pre-wrap">{summary}</div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.url}
            alt={img.caption || 'User upload'}
            className="rounded shadow object-cover h-32 w-full"
          />
        ))}
      </div>
    </div>
  )
}

export default AICompilations
