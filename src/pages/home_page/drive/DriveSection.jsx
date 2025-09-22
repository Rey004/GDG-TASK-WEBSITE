import React from 'react'
import './DriveSection.css'

const DriveSection = React.forwardRef((props, ref) => {
  return (
    <section className="drive-section" ref={ref}>
      <h2 className="drive-title">What Keeps Us Going?</h2>
      <div className="drive-divider"></div>

      <div className="drive-content">
        <div className="drive-image">
          <img
            src="/assets/drive.webp"
            alt="Team building with puzzle pieces"
          />
        </div>

        <div className="drive-text-container">
          <div className="drive-yellow-bar"></div>
          <p className="drive-text">
            Our club helps students to connect, learn, empower and
            grow. Teamwork, innovative thinking, communication,
            and leading with solutions is what helps us achieve new
            heights.
          </p>
          <p className="drive-text">
            The entire team works in coordination, to inspire and
            motivate the upcoming coding community to evolve
            their skills and broaden their horizons of knowledge.
          </p>
        </div>
      </div>
    </section>
  )
})

DriveSection.displayName = 'DriveSection'

export default DriveSection