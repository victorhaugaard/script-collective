'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './projects.module.css'

export default function ProjectsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if user is already authenticated
    const auth = sessionStorage.getItem('sc_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    // Set video playback speed to 2.5x
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5
    }
  }, [isAuthenticated])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple password check - you can change this password
    const ACCESS_PASSWORD = 'sc2025'
    
    if (password === ACCESS_PASSWORD) {
      sessionStorage.setItem('sc_authenticated', 'true')
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('sc_authenticated')
    setIsAuthenticated(false)
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <h1 className={styles.authTitle}>Access Projects</h1>
          <p className={styles.authDescription}>
            Enter the password to view Script Collective's portfolio
          </p>
          <form onSubmit={handleSubmit} className={styles.authForm}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className={styles.authInput}
              autoFocus
            />
            {error && <p className={styles.authError}>{error}</p>}
            <button type="submit" className={styles.authButton}>
              Access Projects
            </button>
          </form>
          <button 
            onClick={() => router.push('/')}
            className={styles.backButton}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo} onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
          <img src="/logo.png" alt="Script Collective" className={styles.logoImage} />
        </div>
        <div className={styles.headerActions}>
          <button onClick={() => router.push('/')} className={styles.homeButton}>
            Home
          </button>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Our Projects</h1>
          <p className={styles.subtitle}>
            Showcasing innovative solutions and digital experiences
          </p>

          <div className={styles.projectsGrid}>
            {/* Rail Seekers Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <video
                  ref={videoRef}
                  className={styles.projectPreview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ transform: 'scale(1)', transformOrigin: 'center' }}
                >
                  <source src="/railseekers_showcase.webm" type="video/webm" />
                </video>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Rail Seekers</h3>
                <p className={styles.projectDescription}>
                  A modern platform for discovering and planning scenic railway journeys across Europe. 
                  Built with Next.js and featuring interactive route planning, community reviews, and 
                  detailed itineraries.
                </p>
                <div className={styles.projectTags}>
                  <span className={styles.tag}>Next.js</span>
                  <span className={styles.tag}>TypeScript</span>
                  <span className={styles.tag}>Travel Tech</span>
                </div>
                <div className={styles.projectLinks}>
                  <a 
                    href="https://www.railseekers.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder for more projects */}
            <div className={styles.projectCard}>
              <div className={styles.projectPlaceholder}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p>More projects coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Script Collective. All rights reserved.</p>
      </footer>
    </div>
  )
}
