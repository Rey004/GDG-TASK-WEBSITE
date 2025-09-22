import React from 'react'
import './HeroSection.css'

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <section className="hero-section" ref={ref}>
      <h1 className="hero-title">
        <span className="google-text google-logo-font">
          <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span>
        </span>
        {' '}
        <span className="black">Developer Groups</span>
        <span className="chapter">RBU Chapter</span>
      </h1>

      <div className="hero-image">
        <img
          src="/assets/hero.webp"
          alt="Google Developer Group illustration showing three people with tech icons"
        />
      </div>

      <p className="hero-description">
        Google Developer Groups are community groups for college and university students interested in Google developer technologies.
      </p>

      <button className="join-button">JOIN US</button>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection