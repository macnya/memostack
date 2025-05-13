import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { auth } from './services/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Gallery from './pages/Gallery'
import LoginScreen from './pages/LoginScreen'
import MainScreen from './pages/MainScreen'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('Auth state changed, user:', user)
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-poppins text-orange-600">
        Loading MemoStack... 🌴
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginScreen />} />
        <Route path="/dashboard" element={user ? <MainScreen user={user} /> : <Navigate to="/" />} />
        <Route path="/upload" element={user ? <MainScreen user={user} /> : <Navigate to="/" />} />
        <Route path="/UploadForm" element={user ? <MainScreen user={user} /> : <Navigate to="/" />} />
        <Route path="/gallery" element={user ? <Gallery /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
