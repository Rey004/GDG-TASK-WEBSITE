import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './home.css'
import HeroSection from './hero/HeroSection'
import GetToKnowSection from './get-to-know/GetToKnowSection'
import MissionSection from './mission/MissionSection'
import PerspectiveSection from './perspective/PerspectiveSection'
import DriveSection from './drive/DriveSection'
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
      // Check if device is mobile for different trigger points
      const isMobile = window.innerWidth <= 768
      const mobileStartTrigger = isMobile ? "top 90%" : "top 80%"
      const mobileTitleTrigger = isMobile ? "top 85%" : "top 75%"

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

      // Get To Know Section - Minimal fade in with mobile optimization
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
            start: mobileStartTrigger,
            markers: false // Set to true for debugging
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
            start: mobileTitleTrigger
          }
        }
      )

      // Mission Section - Clean slide up with mobile optimization
      gsap.fromTo(".mission-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: mobileStartTrigger
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
            start: mobileTitleTrigger
          }
        }
      )

      gsap.fromTo(".mission-image", 
        { opacity: 0, x: isMobile ? -10 : -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-content",
            start: mobileStartTrigger
          }
        }
      )

      gsap.fromTo(".mission-text-container", 
        { opacity: 0, x: isMobile ? 10 : 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mission-content",
            start: mobileStartTrigger
          }
        }
      )

      // Perspective Section with mobile optimization
      gsap.fromTo(".perspective-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: perspectiveRef.current,
            start: mobileStartTrigger
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
            start: mobileTitleTrigger
          }
        }
      )

      gsap.fromTo(".perspective-text-container", 
        { opacity: 0, x: isMobile ? -10 : -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".perspective-content",
            start: mobileStartTrigger
          }
        }
      )

      gsap.fromTo(".perspective-image", 
        { opacity: 0, x: isMobile ? 10 : 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".perspective-content",
            start: mobileStartTrigger
          }
        }
      )

      // Drive Section with mobile optimization
      gsap.fromTo(".drive-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: driveRef.current,
            start: mobileStartTrigger
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
            start: mobileTitleTrigger
          }
        }
      )

      gsap.fromTo(".drive-image", 
        { opacity: 0, x: isMobile ? -10 : -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".drive-content",
            start: mobileStartTrigger
          }
        }
      )

      gsap.fromTo(".drive-text-container", 
        { opacity: 0, x: isMobile ? 10 : 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".drive-content",
            start: mobileStartTrigger
          }
        }
      )

      // Stats Section Animation with mobile optimization
      gsap.fromTo(".stats-section", 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: mobileStartTrigger
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
          stagger: isMobile ? 0.2 : 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: isMobile ? "top 85%" : "top 70%"
          }
        }
      )

      // Technologies Section Animation with mobile optimization
      gsap.fromTo(".technologies-header", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techRef.current,
            start: mobileStartTrigger
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
            start: mobileTitleTrigger
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
          stagger: isMobile ? 0.25 : 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".tech-cards-container",
            start: mobileStartTrigger
          }
        }
      )

      // FAQ Section Animation with mobile optimization
      gsap.fromTo(".faq-section .section-title", 
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqRef.current,
            start: mobileStartTrigger
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
          stagger: isMobile ? 0.15 : 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: mobileStartTrigger
          }
        }
      )

      // Subtle parallax for color bars (minimal movement) - disabled on mobile for performance
      if (!isMobile) {
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
      }

      // Add window resize listener to update triggers if orientation changes
      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('resize', handleResize)
      }

    }, homeRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="home-page" ref={homeRef}>
      <HeroSection ref={heroRef} />
      <GetToKnowSection ref={getToKnowRef} />
      <MissionSection ref={missionRef} />
      <PerspectiveSection ref={perspectiveRef} />
      <DriveSection ref={driveRef} />
      
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