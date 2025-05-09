// src/components/Gallery.jsx
import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'

const Gallery = () => {
  const [memories, setMemories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMemories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'memories'))
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setMemories(data)
      } catch (error) {
        console.error("Error fetching memories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMemories()
  }, [])

  if (loading) return <p className="text-center">Loading memories...</p>
  if (memories.length === 0) return <p className="text-center">No memories found.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl mx-auto">
      {memories.map(({ id, fileUrl, title, fileType, timestamp }) => (
        <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden p-2">
          {fileType.startsWith('image') ? (
            <img src={fileUrl} alt={title} className="w-full h-60 object-cover rounded" />
          ) : (
            <video controls className="w-full h-60 object-cover rounded">
              <source src={fileUrl} type={fileType} />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="p-2">
            <h3 className="text-lg font-semibold truncate">{title}</h3>
            <p className="text-sm text-gray-500">
              {timestamp ? new Date(timestamp?.seconds * 1000).toLocaleString() : 'No date'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Gallery
