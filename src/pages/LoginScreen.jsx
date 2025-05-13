// src/pages/LoginScreen.jsx
import React, { useState } from 'react'
import { auth } from '../services/firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const handleEmailLogin = async (e) => {
    e.preventDefault()
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
    } catch (err) {
      console.error('Auth error', err)
      alert(err.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (err) {
      console.error('Google login error', err)
      alert(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100 px-4">
      <div className="container text-center">
        <h1 className="text-4xl text-pink-500 font-pacifico mb-2">☀️ MemoStack</h1>
        <p>Capture your summer vibes, forever.</p>

        <form
          onSubmit={handleEmailLogin}
          className="mt-6 bg-white p-6 rounded-2xl shadow-lg"
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-3 w-full px-4 py-2 border border-pink-200 rounded-full focus:ring-2 focus:ring-orange-300 outline-none transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 w-full px-4 py-2 border border-pink-200 rounded-full focus:ring-2 focus:ring-orange-300 outline-none transition"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 rounded-full font-semibold shadow hover:opacity-90 transition"
          >
            {isRegistering ? '🌟 Sign Up' : '🌴 Sign In'}
          </button>

          <p className="text-sm mt-4 text-gray-600">
            {isRegistering ? 'Already have an account?' : 'New here?'}{' '}
            <span
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-pink-500 font-medium cursor-pointer hover:underline"
            >
              {isRegistering ? 'Sign In' : 'Create Account'}
            </span>
          </p>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow transition"
          >
            🔐 Sign in with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
