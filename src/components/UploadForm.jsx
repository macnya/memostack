// src/components/UploadForm.jsx
import React, { useState } from 'react'
import { storage, db } from '../services/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const UploadForm = ({ user }) => {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const [uploading, setUploading] = useState(false)

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!image || !user) return

    const imageRef = ref(storage, `uploads/${user.uid}/${Date.now()}_${image.name}`)

    try {
      setUploading(true)
      await uploadBytes(imageRef, image)
      const downloadURL = await getDownloadURL(imageRef)

      // Save image metadata to Firestore (optional)
      await addDoc(collection(db, 'images'), {
        userId: user.uid,
        userName: user.displayName,
        photoURL: user.photoURL,
        caption,
        imageUrl: downloadURL,
        createdAt: serverTimestamp(),
      })

      alert('Upload successful!')
      setImage(null)
      setCaption('')
    } catch (err) {
      console.error('Upload error:', err)
      alert('Upload failed.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-md mb-6">
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="mb-2"
      />
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Enter a caption"
        className="w-full border p-2 mb-2 rounded"
      />
      <button
        onClick={handleUpload}
        disabled={uploading || !image}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  )
}

export default UploadForm
