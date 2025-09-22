import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './home.css'
import StatsSection from '../../components/stats_circle/StatsSection'
import TechnologiesSection from '../../components/technologies/TechnologiesSection'
import FAQ from '../../components/faq/FAQ'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const homeRef = useRef(null)
  const heroRef = useRef(null)
  const getToKnowRef = useRef(null)
  const missionRef = useRef(null)
  const perspectiveRef = useRef(null)
  const driveRef = useRef(null)
  const statsRef = useRef(null)
  const techRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Section - Simple fade in sequence
      gsap.fromTo(".hero-title", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power2.out"
        }
      )

      gsap.fromTo(".hero-image", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out"
        }
      )

      gsap.fromTo(".hero-description", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          delay: 0.5,
          ease: "power2.out"
        }
      )

      gsap.fromTo(".join-button", 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          delay: 0.7,
          ease: "power2.out"
        }
      )

      // Get To Know Section - Minimal fade in
      gsap.fromTo([".arrow1", ".arrow2", ".arrow3"], 
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: getToKnowRef.current,
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".get-to-know-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: getToKnowRef.current,
            start: "top 75%"
          }
        }
      )

      // Mission Section - Clean slide up
      gsap.fromTo(".mission-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".mission-divider", 
        { width: 0, opacity: 0 },
        {
          width: "190px",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 75%"
          }
        }
      )

      gsap.fromTo(".mission-image", 
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-content",
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".mission-text-container", 
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-content",
            start: "top 80%"
          }
        }
      )

      // Perspective Section
      gsap.fromTo(".perspective-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: perspectiveRef.current,
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".perspective-divider", 
        { width: 0, opacity: 0 },
        {
          width: "190px",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: perspectiveRef.current,
            start: "top 75%"
          }
        }
      )

      gsap.fromTo(".perspective-text-container", 
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".perspective-content",
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".perspective-image", 
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".perspective-content",
            start: "top 80%"
          }
        }
      )

      // Drive Section
      gsap.fromTo(".drive-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: driveRef.current,
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".drive-divider", 
        { width: 0, opacity: 0 },
        {
          width: "190px",
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: driveRef.current,
            start: "top 75%"
          }
        }
      )

      gsap.fromTo(".drive-image", 
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".drive-content",
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".drive-text-container", 
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".drive-content",
            start: "top 80%"
          }
        }
      )

      // Stats Section Animation
      gsap.fromTo(".stats-section", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%"
          }
        }
      )

      // Animate individual stat circles with stagger
      gsap.fromTo(".stat-circle-container", 
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 70%"
          }
        }
      )

      // Technologies Section Animation
      gsap.fromTo(".technologies-header", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 80%"
          }
        }
      )

      gsap.fromTo(".technologies-subtitle", 
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techRef.current,
            start: "top 75%"
          }
        }
      )

      // Animate tech cards with stagger
      gsap.fromTo(".tech-card", 
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tech-cards-container",
            start: "top 80%"
          }
        }
      )

      // FAQ Section Animation
      gsap.fromTo(".faq-section .section-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 80%"
          }
        }
      )

      // Animate FAQ items with stagger
      gsap.fromTo(".faq-item", 
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 80%"
          }
        }
      )

      // Subtle parallax for color bars (minimal movement)
      gsap.to(".mission-blue-bar", {
        y: -5,
        scrollTrigger: {
          trigger: ".mission-blue-bar",
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      })

      gsap.to(".perspective-green-bar", {
        y: -5,
        scrollTrigger: {
          trigger: ".perspective-green-bar",
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      })

      gsap.to(".drive-yellow-bar", {
        y: -5,
        scrollTrigger: {
          trigger: ".drive-yellow-bar",
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      })

    }, homeRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="home-page" ref={homeRef}>
      <section className="hero-section" ref={heroRef}>
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

      <section className="get-to-know-section" ref={getToKnowRef}>
        <div className="arrow-container">
          <div className="arrow1" ></div>
          <div className="arrow2" ></div>
          <div className="arrow3" ></div>
        </div>
        <h2 className="get-to-know-title">Get To Know Us!</h2>
      </section>

      <section className="mission-section" ref={missionRef}>
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

      <section className="perspective-section" ref={perspectiveRef}>
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

      <section className="drive-section" ref={driveRef}>
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

      <div ref={statsRef}>
        <StatsSection />
      </div>
      
      <div ref={techRef}>
        <TechnologiesSection />
      </div>
      
      <div ref={faqRef}>
        <FAQ />
      </div>
    </div>
  )
}

export default Home