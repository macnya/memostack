import React, { useState, useEffect } from 'react'
import { db } from '../services/firebase'
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const Journaling = ({ user }) => {
  const [entries, setEntries] = useState([])
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const q = query(
      collection(db, 'journals'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setEntries(data)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [user])

  const handleAddEntry = async () => {
    if (!content.trim()) return

    await addDoc(collection(db, 'journals'), {
      userId: user.uid,
      content: content.trim(),
      createdAt: serverTimestamp(),
    })

    setContent('')
  }

  const handleDeleteEntry = async (id) => {
    await deleteDoc(doc(db, 'journals', id))
  }

  if (loading) return <p>Loading journal entries...</p>

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">📝 Your Journal</h2>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your journal entry here..."
        className="w-full p-3 border rounded mb-4 resize-none h-32"
      />

      <button
        onClick={handleAddEntry}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-6"
      >
        Add Entry
      </button>

      {entries.length === 0 ? (
        <p>No journal entries yet.</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry) => (
            <li key={entry.id} className="border p-3 rounded shadow-sm relative">
              <p>{entry.content}</p>
              <small className="text-gray-500">
                {entry.createdAt?.toDate().toLocaleString()}
              </small>
              <button
                onClick={() => handleDeleteEntry(entry.id)}
                className="absolute top-2 right-2 text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Journaling
