import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

const Error = () => {
  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="error-page">
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <div className="error-container">
        <div className="error-graphic">
          <h1 className="error-number">404</h1>
        </div>
        
        <h2 className="error-title">Oops! Page Not Found</h2>
        
        <p className="error-subtitle">
          Looks like you've ventured into uncharted territory
        </p>
        
        <div className="error-divider"></div>
        
        <p className="error-message">
          The page you're looking for might have been moved, deleted, or possibly never existed. 
          Don't worry, even the best developers encounter 404s!
        </p>
        
        <div className="error-illustration">
          <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="80" width="300" height="180" rx="10" fill="var(--card-bg-color)" stroke="var(--secondary-text-color)" strokeWidth="2"/>
            <rect x="70" y="100" width="260" height="140" rx="5" fill="var(--section-bg-color)"/>
            <circle cx="200" cy="170" r="30" fill="#4285F4" opacity="0.3"/>
            <path d="M185 170L195 180L215 160" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="160" y="190" width="80" height="8" rx="4" fill="var(--secondary-text-color)" opacity="0.3"/>
            <rect x="180" y="205" width="40" height="6" rx="3" fill="var(--secondary-text-color)" opacity="0.2"/>
            <circle cx="80" cy="50" r="8" fill="#EA4335"/>
            <rect x="320" y="40" width="15" height="15" fill="#FBBC05" transform="rotate(45 327.5 47.5)"/>
            <polygon points="120,30 130,50 110,50" fill="#34A853"/>
          </svg>
        </div>
        
        <div className="error-actions">
          <Link to="/" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Go Home
          </Link>
          
          <button onClick={goBack} className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error