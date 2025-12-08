'use client'

import { useState, FormEvent } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const response = await fetch('https://formspree.io/f/xqardddb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Script Collective" className={styles.logoImage} />
        </div>
        <button
          className={styles.contactButton}
          onClick={() => setIsContactOpen(true)}
        >
          Contact
        </button>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={`${styles.title} fade-in`}>
            Building Future Software
          </h1>
          <p className={`${styles.subtitle} fade-in delay-1`}>
            Full-stack development studio crafting digital experiences
            <br />
            with precision and artistry
          </p>
          <button
            className={`${styles.accessButton} fade-in delay-2`}
            onClick={() => setIsAccessModalOpen(true)}
          >
            <span>Get Access to Projects</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className={styles.decorativeOrb1}></div>
        <div className={styles.decorativeOrb2}></div>
        <div className={styles.grid}></div>
      </main>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsContactOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setIsContactOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <h2 className={styles.modalTitle}>Contact</h2>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>CEO</span>
                <span className={styles.contactValue}>Victor Haugaard</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:victortomashaugaard@gmail.com" className={styles.contactValue}>
                  victortomashaugaard@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Access Modal */}
      {isAccessModalOpen && (
        <div className={styles.modalOverlay} onClick={() => {
          setIsAccessModalOpen(false)
          setIsSubmitted(false)
          setError('')
        }}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => {
                setIsAccessModalOpen(false)
                setIsSubmitted(false)
                setError('')
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h2 className={styles.modalTitle}>Request Received!</h2>
                <p>Thank you for your interest. We'll review your request and get back to you soon.</p>
              </div>
            ) : (
              <>
                <h2 className={styles.modalTitle}>Request Access</h2>
                <p className={styles.modalDescription}>
                  Enter your details to request access to Script Collective's exclusive projects
                </p>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className={styles.input}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={styles.input}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about your interest..."
                    className={styles.textarea}
                    rows={4}
                    required
                  />
                  {error && <p className={styles.errorMessage}>{error}</p>}
                  <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2025 Script Collective. All rights reserved.</p>
      </footer>
    </div>
  )
}
