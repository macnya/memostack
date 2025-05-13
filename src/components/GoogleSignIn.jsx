import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebase'
import { useNavigate } from 'react-router-dom'

const GoogleSignIn = () => {
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      navigate('/upload')
    } catch (err) {
      console.error('Login error', err)
    }
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Sign in with Google
    </button>
  )
}

export default GoogleSignIn
