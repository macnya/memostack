import React, { useEffect, useState } from 'react'
import { db } from '../services/firebase'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  limit,
  startAfter,
  getDocs
} from 'firebase/firestore'

const PAGE_SIZE = 6

const Gallery = ({ user }) => {
  const [images, setImages] = useState([])
  const [lastDoc, setLastDoc] = useState(null)
  const [search, setSearch] = useState('')
  const [loadingMore, setLoadingMore] = useState(false)
  const [filteredImages, setFilteredImages] = useState([])

  const fetchImages = async (reset = false) => {
    const imagesRef = collection(db, 'images')
    let q = query(imagesRef, orderBy('createdAt', 'desc'), limit(PAGE_SIZE))

    if (lastDoc && !reset) {
      q = query(imagesRef, orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(PAGE_SIZE))
    }

    const snapshot = await getDocs(q)
    const newImages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    const lastVisible = snapshot.docs[snapshot.docs.length - 1]

    setImages(prev => reset ? newImages : [...prev, ...newImages])
    setLastDoc(lastVisible)
  }

  useEffect(() => {
    fetchImages(true)
  }, [])

  useEffect(() => {
    if (search.trim()) {
      setFilteredImages(
        images.filter(img =>
          img.userName?.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      setFilteredImages(images)
    }
  }, [images, search])

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'images', id))
  }

  const handleLike = async (image) => {
    const newLikes = (image.likes || 0) + 1
    await updateDoc(doc(db, 'images', image.id), { likes: newLikes })
  }

  return (
    <div className="mt-8 w-full max-w-5xl mx-auto">
      {/* Search Field */}
      <input
        type="text"
        placeholder="🔍 Search by user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 px-4 py-2 border border-orange-200 rounded-full shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
      />

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div key={image.id} className="bg-white shadow-lg rounded-xl overflow-hidden p-3 border border-yellow-100 hover:shadow-xl transition duration-300">
            <img
              src={image.url}
              alt="Uploaded"
              className="rounded-lg w-full h-48 object-cover"
            />
            <div className="mt-2 text-sm text-gray-700 font-medium">📸 {image.userName}</div>
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={() => handleLike(image)}
                className="text-sm bg-pink-100 text-pink-600 px-3 py-1 rounded-full hover:bg-pink-200 transition"
              >
                ❤️ {image.likes || 0}
              </button>
              {image.uid === user.uid && (
                <button
                  onClick={() => handleDelete(image.id)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {lastDoc && (
        <div className="text-center mt-8">
          <button
            onClick={() => fetchImages()}
            disabled={loadingMore}
            className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            {loadingMore ? 'Loading...' : '🔄 Load More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery
