import React from 'react';
import './StatCircle.css';

const StatCircle = ({ value, label }) => {
  return (
    <div className="stat-circle-container">
      <div className="stat-circle">
        <div className="circle-segment red-segment"></div>
        <div className="circle-segment blue-segment"></div>
        <div className="circle-segment green-segment"></div>
        <div className="circle-segment yellow-segment"></div>
        <div className="circle-inner">
          <span className="circle-value">{value}</span>
        </div>
      </div>
      <h3 className="stat-label">{label}</h3>
    </div>
  );
};

export default StatCircle;