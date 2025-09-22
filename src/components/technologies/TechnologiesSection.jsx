import React from 'react';
import TechCard from '../tech_card/TechCard';
import './TechnologiesSection.css';

const TechnologiesSection = () => {
  const technologies = [
    {
      name: 'Android',
      icon: '/assets/tech/android.svg',
      color: 'red'
    },
    {
      name: 'Flutter',
      icon: '/assets/tech/flutter.svg',
      color: 'blue'
    },
    {
      name: 'Cloud',
      icon: '/assets/tech/cloud.svg',
      color: 'green'
    }
  ];

  return (
    <section className="technologies-section">
      <div className="technologies-container">
        <div className="technologies-header">
          <div className="header-line left"></div>
          <h2 className="technologies-title">Technologies</h2>
          <div className="header-line right"></div>
        </div>
        
        <p className="technologies-subtitle">
          Domains That Excite Us to Collaborate and Teach!
        </p>
        
        <div className="tech-cards-container">
          {technologies.map((tech, index) => (
            <TechCard 
              key={index}
              name={tech.name}
              icon={tech.icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;