import React, { useState } from 'react'
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage'
import { db, storage } from '../services/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const UploadForm = ({ user }) => {
  const [file, setFile] = useState(null)
  const [caption, setCaption] = useState('')
  const [progress, setProgress] = useState(0)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = () => {
    if (!file) return alert('📷 Please select an image file!')
    setUploading(true)

    const storageRef = ref(storage, `images/${user.uid}/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percent)
      },
      (error) => {
        console.error('Upload error:', error)
        setUploading(false)
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
        await addDoc(collection(db, 'images'), {
          url: downloadURL,
          caption,
          createdAt: serverTimestamp(),
          uid: user.uid,
          userName: user.displayName,
          photoURL: user.photoURL,
        })

        // Reset state
        setFile(null)
        setCaption('')
        setProgress(0)
        setUploading(false)
      }
    )
  }

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md border border-yellow-100">
      <h2 className="text-xl font-semibold text-orange-600 mb-4 font-poppins">🌴 Upload a Summer Memory</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full mb-3 text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-100 file:text-pink-700 hover:file:bg-pink-200 transition"
      />

      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="w-full mb-4 px-4 py-2 border border-pink-200 rounded-full text-sm focus:ring-2 focus:ring-orange-300 outline-none transition"
      />

      {uploading && (
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
          <div
            className="bg-green-500 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 rounded-full font-semibold shadow hover:opacity-90 transition"
      >
        {uploading ? 'Uploading...' : '📤 Upload'}
      </button>
    </div>
  )
}

export default UploadForm
