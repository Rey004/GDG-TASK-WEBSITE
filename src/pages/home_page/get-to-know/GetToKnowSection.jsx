import React from 'react'
import './GetToKnowSection.css'

const GetToKnowSection = React.forwardRef((props, ref) => {
  return (
    <section className="get-to-know-section" ref={ref}>
      <div className="arrow-container">
        <div className="arrow1"></div>
        <div className="arrow2"></div>
        <div className="arrow3"></div>
      </div>
      <h2 className="get-to-know-title">Get To Know Us!</h2>
    </section>
  )
})

GetToKnowSection.displayName = 'GetToKnowSection'

export default GetToKnowSection