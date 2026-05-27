import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__image-col">
          <div className="about__image-frame">
            <div className="about__image-placeholder">
              <img src="/assets/logos/submark.png" alt="The Site Strategist submark" />
              <p>Your photo here</p>
            </div>
          </div>
          <div className="about__badge">
            <span className="about__badge-num">100+</span>
            <span className="about__badge-label">Websites Launched</span>
          </div>
        </div>

        <div className="about__text-col">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">
            Strategy-first. <span className="text-coral">Results-driven.</span>
          </h2>
          <p className="about__body">
            Hi, I'm [Your Name] — founder of The Site Strategist. I help small business
            owners stop spinning their wheels on DIY websites and start showing up online
            with confidence.
          </p>
          <p className="about__body">
            My approach blends smart strategy with beautiful design so your website
            doesn't just look good — it works. Every page, every button, every word is
            intentional.
          </p>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-num">5+</span>
              <span className="about__stat-label">Years of Experience</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">50+</span>
              <span className="about__stat-label">Happy Clients</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">3x</span>
              <span className="about__stat-label">Avg. Lead Increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
