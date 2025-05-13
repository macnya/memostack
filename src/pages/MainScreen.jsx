import React, { useState } from 'react'
import UploadForm from '../components/UploadForm'
import Gallery from '../pages/Gallery'
import Journaling from './Journaling'
import AICompilations from './AICompilations'
import { auth } from '../services/firebase'
import { signOut } from 'firebase/auth'
import { Link, Navigate } from 'react-router-dom'


const MainScreen = ({ user }) => {
  const [view, setView] = useState('upload')

  if (!user) return <Navigate to="/" />

  const handleLogout = () => signOut(auth)

  return (
    <div className="bg-gradient-to-br from-yellow-200 via-pink-100 to-orange-200 min-h-screen flex flex-col items-center px-4 py-8 text-gray-800 font-poppins">
      <h1 className="text-5xl font-pacifico text-orange-600 mb-2">📸 MemoStack</h1>
      <p className="text-lg text-gray-700 mb-6">Relive your summer vibes 🌞🌴</p>

      {/* User Info Card */}
      <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 mb-6 w-full max-w-md">
<img
  src={user.photoURL || 'https://www.gravatar.com/avatar?d=mp&f=y'}
  alt={user.displayName}
  className="w-14 h-14 rounded-full border-2 border-pink-300"
/>
        <div className="flex-1">
          <div className="text-sm font-semibold">{user.displayName}</div>
        </div>
        <button onClick={handleLogout} className="text-red-500 text-sm hover:underline">
          Sign Out
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView('upload')}
          className={`px-4 py-2 rounded-full font-semibold shadow ${
            view === 'upload' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'
          }`}
        >
          Upload
        </button>
        <button
          onClick={() => setView('gallery')}
          className={`px-4 py-2 rounded-full font-semibold shadow ${
            view === 'gallery' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'
          }`}
        >
          Gallery
        </button>
        <button
          onClick={() => setView('journaling')}
          className={`px-4 py-2 rounded-full font-semibold shadow ${
            view === 'journaling' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'
          }`}
        >
          Journaling
        </button>
        <button
          onClick={() => setView('aiCompilations')}
          className={`px-4 py-2 rounded-full font-semibold shadow ${
            view === 'aiCompilations' ? 'bg-pink-600 text-white' : 'bg-white text-pink-600'
          }`}
        >
          AI Compilations
        </button>
      </div>

      {/* Conditional Views */}
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md p-6">
        {view === 'upload' && <UploadForm user={user} />}
        {view === 'gallery' && <Gallery user={user} />}
        {view === 'journaling' && <Journaling user={user} />}
        {view === 'aiCompilations' && <AICompilations user={user} />}
      </div>
    </div>
  )
}

export default MainScreen
