import React from 'react';
import StatCircle from './StatCircle';
import './StatsSection.css';

const StatsSection = () => {
  const stats = [
    { value: '03+', label: 'Years' },
    { value: '10+', label: 'Events' },
    { value: '1K+', label: 'Community\nMembers' },
    { value: '200+', label: 'Attendees' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <StatCircle 
            key={index}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;