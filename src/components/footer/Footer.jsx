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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <img src="/assets/instagram.webp" alt="Instagram" />
              </a>
              <a href="https://linkedin.com/company/gdsc-rcoem/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/linkedin.webp" alt="LinkedIn" />
              </a>
              <a href="https://x.com/gdsc_rcoem" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="/assets/twitter.webp" alt="Twitter" />
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
