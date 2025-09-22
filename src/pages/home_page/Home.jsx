import './home.css'
import StatsSection from '../../components/stats_circle/StatsSection'
import TechnologiesSection from '../../components/technologies/TechnologiesSection'
import FAQ from '../../components/faq/FAQ'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
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

      <section className="get-to-know-section">
        <div className="arrow-container">
          <div className="arrow1" ></div>
          <div className="arrow2" ></div>
          <div className="arrow3" ></div>
        </div>
        <h2 className="get-to-know-title">Get To Know Us!</h2>
      </section>

      <section className="mission-section">
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

      <section className="perspective-section">
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

      <section className="drive-section">
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

      <StatsSection />
      <TechnologiesSection />
      <FAQ />
    </div>
  )
}

export default Home