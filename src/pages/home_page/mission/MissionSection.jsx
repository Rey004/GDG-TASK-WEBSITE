import React from 'react'
import './MissionSection.css'

const MissionSection = React.forwardRef((props, ref) => {
  return (
    <section className="mission-section" ref={ref}>
      <h2 className="mission-title">Our Mission</h2>
      <div className="mission-divider"></div>

      <div className="mission-content">
        <div className="mission-image">
          <img
            src="/assets/mission.webp"
            alt="Team collaboration illustration showing people discussing ideas"
          />
        </div>

        <div className="mission-text-container">
          <div className="mission-blue-bar"></div>
          <p className="mission-text">
            Our mission involves community engagement, leadership development, building strong tech
            foundation, while enabling all tech enthusiasts to contribute to the global society.
          </p>
        </div>
      </div>
    </section>
  )
})

MissionSection.displayName = 'MissionSection'

export default MissionSection