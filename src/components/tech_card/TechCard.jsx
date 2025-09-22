import React from 'react';
import './TechCard.css';

const TechCard = ({ color, icon, name }) => {
  return (
    <div className="tech-card">
      <div className={`tech-card-header ${color}`}></div>
      <div className="tech-card-content">
        <img src={icon} alt={`${name} icon`} className="tech-icon" />
        <h3 className="tech-name">{name}</h3>
        <div className="expand-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10l5 5 5-5" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TechCard;