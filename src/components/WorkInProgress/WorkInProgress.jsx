import React from 'react'
import { Link } from 'react-router-dom'
import './WorkInProgress.css'

const WorkInProgress = ({ 
  title, 
  description, 
  icon,
  color = 'blue',
  estimatedCompletion 
}) => {
  const colorMap = {
    blue: '#4285F4',
    red: '#EA4335',
    green: '#34A853',
    yellow: '#FBBC05'
  }

  return (
    <div className="wip-page">
      <div className="wip-container">
        <div className="wip-icon" style={{ backgroundColor: colorMap[color] }}>
          {icon}
        </div>
        
        <h1 className="wip-title">{title}</h1>
        
        <div className="wip-divider" style={{ backgroundColor: colorMap[color] }}></div>
        
        <p className="wip-description">{description}</p>
        
        {estimatedCompletion && (
          <div className="wip-timeline">
            <span className="timeline-label">Expected Launch:</span>
            <span className="timeline-date">{estimatedCompletion}</span>
          </div>
        )}
        
        <div className="wip-illustration">
          <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="60" width="200" height="120" rx="8" fill="var(--card-bg-color)" stroke="var(--secondary-text-color)" strokeWidth="2"/>
            <rect x="70" y="80" width="160" height="80" rx="4" fill="var(--section-bg-color)"/>
            
            {/* Construction tools */}
            <rect x="120" y="100" width="60" height="40" rx="20" fill={colorMap[color]} opacity="0.3"/>
            <circle cx="150" cy="120" r="15" fill={colorMap[color]} opacity="0.6"/>
            <path d="M140 120L150 130L170 110" stroke={colorMap[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            
            {/* Progress bars */}
            <rect x="90" y="45" width="120" height="4" rx="2" fill="var(--secondary-text-color)" opacity="0.2"/>
            <rect x="90" y="45" width="80" height="4" rx="2" fill={colorMap[color]}/>
            
            {/* Decorative elements */}
            <circle cx="40" cy="40" r="6" fill={colorMap[color]} opacity="0.4"/>
            <rect x="260" y="35" width="12" height="12" fill={colorMap[color]} opacity="0.4" transform="rotate(45 266 41)"/>
          </svg>
        </div>
        
        <div className="wip-features">
          <h3 className="features-title">Coming Soon:</h3>
          <div className="features-list">
            <div className="feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke={colorMap[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Interactive Design
            </div>
            <div className="feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke={colorMap[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Real-time Updates
            </div>
            <div className="feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke={colorMap[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Mobile Optimized
            </div>
          </div>
        </div>
        
        <div className="wip-actions">
          <Link to="/" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="wip-notification">
          <p>Want to be notified when this page is ready?</p>
          <a href="mailto:dsc.rknec@gmail.com" className="notify-link">
            Get Notified
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkInProgress