import React from 'react'
import './PerspectiveSection.css'

const PerspectiveSection = React.forwardRef((props, ref) => {
  return (
    <section className="perspective-section" ref={ref}>
      <h2 className="perspective-title">Our Perspective</h2>
      <div className="perspective-divider"></div>

      <div className="perspective-content">
        <div className="perspective-text-container">
          <div className="perspective-green-bar"></div>
          <p className="perspective-text">
            We're a community-driven initiative aiming to bridge the
            gap between research and practice, develop
            evolutionary thinking and network throughout the
            process. We believe in connecting fellow developers,
            spreading stimulative ideas and working for a solution
            driven team.
          </p>
        </div>

        <div className="perspective-image">
          <img
            src="/assets/perspective.webp"
            alt="Team working together on puzzle pieces"
          />
        </div>
      </div>
    </section>
  )
})

PerspectiveSection.displayName = 'PerspectiveSection'

export default PerspectiveSection