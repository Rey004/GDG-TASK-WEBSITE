import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="gdg-logo">
            <img src="/assets/logo.webp" alt="GDG Logo" />
            <div className="logo-text">
              <h3 className="logo-title">Google Developer Groups</h3>
              <p className="logo-subtitle"><span>On Campus</span> • Ramdeobaba University</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-right">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p className="contact-text">
                Shri Ramdeobaba College of Engineering and Management,<br />
                Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur- 440013
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-svg">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M22 7l-10 7L2 7"></path>
                </svg>
              </div>
              <p className="contact-text">
                <a href="mailto:dsc.rknec@gmail.com" className="contact-link">dsc.rknec@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="social-section">
            <p className="social-title">Follow Us:</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/gdg_rbu/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" className="social-svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/gdsc-rcoem/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" className="social-svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://x.com/gdsc_rcoem" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%" className="social-svg">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
        <img src="/assets/footer-pattern.svg" alt="Footer Pattern" className="footer-pattern" />
    </footer>
  )
}

export default Footer
