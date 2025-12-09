'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styles from './projects.module.css'

export default function ProjectsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const railSeekersVideoRef = useRef<HTMLVideoElement>(null)
  const redditCrawlerVideoRef = useRef<HTMLVideoElement>(null)
  const ergoKeysVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check if user is already authenticated
    const auth = sessionStorage.getItem('sc_authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    // Set video playback speed to 2.5x for all videos
    if (railSeekersVideoRef.current) {
      railSeekersVideoRef.current.playbackRate = 2.5
    }
    if (redditCrawlerVideoRef.current) {
      redditCrawlerVideoRef.current.playbackRate = 2.5
    }
    if (ergoKeysVideoRef.current) {
      ergoKeysVideoRef.current.playbackRate = 2.5
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
                  ref={railSeekersVideoRef}
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

            {/* Reddit Idea Crawler Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <video
                  ref={redditCrawlerVideoRef}
                  className={styles.projectPreview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ transform: 'scale(1)', transformOrigin: 'center' }}
                >
                  <source src="/reddit_idea_crawler.webm" type="video/webm" />
                </video>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Reddit Idea Crawler</h3>
                <p className={styles.projectDescription}>
                  Automated data collection tool for discovering and analyzing trending ideas and discussions
                  from Reddit. Built with Express.js and Node.js, featuring real-time scraping and intelligent
                  data processing.
                </p>
                <div className={styles.projectTags}>
                  <span className={styles.tag}>Node.js</span>
                  <span className={styles.tag}>Express</span>
                  <span className={styles.tag}>Reddit API</span>
                  <span className={styles.tag}>Data Processing</span>
                </div>
                <div className={styles.projectLinks}>
                  <a
                    href="mailto:hello@scriptcollective.com?subject=Reddit Crawler Demo Request"
                    className={styles.projectLink}
                  >
                    Request Demo →
                  </a>
                </div>
                <div className={styles.divider}>
                  <span>or</span>
                </div>
                <button
                  onClick={() => window.open('https://reddit-idea-crawler.vercel.app', '_blank')}
                  className={styles.accessButton}
                >
                  Already have access? Visit App
                </button>
              </div>
            </div>

            {/* ErgoKeys Project */}
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <video
                  ref={ergoKeysVideoRef}
                  className={styles.projectPreview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ transform: 'scale(1)', transformOrigin: 'center' }}
                >
                  <source src="/ergokeys.webm" type="video/webm" />
                </video>
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>ErgoKeys</h3>
                <p className={styles.projectDescription}>
                  Custom ergonomic keyboard design tool using computer vision to scan individual hand
                  kinematics via webcam or photo. Automatically generates personalized PCB designs for
                  split keyboards, then provides assembly guides and part lists for building your
                  perfect ergonomic keyboard.
                </p>
                <div className={styles.projectTags}>
                  <span className={styles.tag}>Computer Vision</span>
                  <span className={styles.tag}>PCB Design</span>
                  <span className={styles.tag}>Hardware</span>
                  <span className={styles.tag}>Ergonomics</span>
                </div>
                <div className={styles.projectLinks}>
                  <a
                    href="mailto:hello@scriptcollective.com?subject=ErgoKeys Demo Request"
                    className={styles.projectLink}
                  >
                    Request Demo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Script Collective. All rights reserved.</p>
      </footer>
    </div>
  )
}
