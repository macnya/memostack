// src/App.jsx
import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import UploadForm from './components/UploadForm'
import Gallery from './components/Gallery'
import GoogleSignIn from './components/GoogleSignIn'
import { auth } from './services/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('User state changed:', currentUser)
    })
    return () => unsubscribe()
  }, [])

  const handleLogout = () => {
    signOut(auth)
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">📸 MemoStack</h1>

      {user ? (
        <>
          <div className="mb-4 flex items-center gap-4">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-700">{user.displayName}</span>
            <button onClick={handleLogout} className="text-red-500 underline text-sm">
              Sign Out
            </button>
          </div>

          <UploadForm user={user} />
          <Gallery user={user} />
        </>
      ) : (
        <GoogleSignIn />
      )}
    </div>
  )
}

export default App
