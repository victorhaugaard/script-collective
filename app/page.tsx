'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false)

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3L21 21M3 21L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <span className={styles.logoText}>SCRIPT COLLECTIVE</span>
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
        <div className={styles.modalOverlay} onClick={() => setIsAccessModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeButton}
              onClick={() => setIsAccessModalOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <h2 className={styles.modalTitle}>Request Access</h2>
            <p className={styles.modalDescription}>
              Enter your details to request access to Script Collective's exclusive projects
            </p>
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email Address"
                className={styles.input}
              />
              <textarea
                placeholder="Tell us about your interest..."
                className={styles.textarea}
                rows={4}
              />
              <button type="submit" className={styles.submitButton}>
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Script Collective. All rights reserved.</p>
      </footer>
    </div>
  )
}
