import { Link } from 'react-router-dom'
import './AboutPage.css'

const brands = [
  { name: 'Mastercard',                 logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png' },
  { name: 'iRobot',                     logo: 'https://cdn.simpleicons.org/irobot' },
  { name: 'GE Healthcare',              logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/GE_HealthCare_logo_2023.png', large: true },
  { name: 'Nerdy',                      logo: 'https://companieslogo.com/img/orig/NRDY_BIG-48185752.svg' },
  { name: 'Citi',                       logo: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Citi_logo_March_2023.svg' },
  { name: 'Varsity Tutors',             logo: 'https://www.logosvgpng.com/wp-content/uploads/2021/12/varsity-tutors-logo-vector.png', large: true },
  { name: 'Anchor & Gold',             logo: null },
  { name: 'Precision Learning Partners', logo: null },
]

const panels = [
  {
    label: 'Not Just Another Website Studio',
    body: `There are a lot of people who can build a pretty website. What sets me apart is the strategy behind it. Every decision — from the layout to the copy to the call-to-action — is intentional and rooted in what actually works for your specific business.`,
  },
  {
    label: 'What I Bring to the Desk',
    body: `Years of experience working with entrepreneurs, service providers, and small business owners who needed more than a pretty page. I bring clarity to confusion, structure to overwhelm, and real results to your online presence — without the agency overhead.`,
  },
  {
    label: 'What Working Together Looks Like',
    body: `We start with a strategy call to get aligned on your goals, audience, and vision. From there I build a plan, design your site, and handle the technical setup. You stay informed without being buried in details. We launch — and you feel good about it.`,
  },
]

const outsideItems = [
  'Dog mom and iced coffee enthusiast',
  'Perpetual learner and podcast addict',
  'Small business champion at heart',
  'Believer that a great website changes everything',
  'Here to make the process feel less overwhelming',
]

export default function AboutPage() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="about-intro">
        <div className="about-intro__inner">
          <div className="about-intro__photo">
            <div className="about-intro__frame">
              <p className="about-intro__frame-label">picture</p>
            </div>
          </div>

          <div className="about-intro__text">
            <h1 className="about-intro__heading">
              Meet The Strategist<br />Behind The Site
            </h1>
            <p className="about-intro__body">
              Hi — I'm Alexis. I started The Site Strategist because I kept seeing
              talented, driven business owners with websites that were holding them
              back. Bad structure, unclear messaging, no real strategy.
            </p>
            <p className="about-intro__body">
              I knew I could help. So I did. Now I partner with small business owners
              to build websites that are clear, functional, and built to grow. No fluff.
              No confusion. Just a site that works.
            </p>
          </div>
        </div>
      </section>

      {/* ── Panels + Outside the Screen (side by side) ── */}
      <section className="about-middle">
        <div className="about-middle__inner">

          {/* Left: info panels */}
          <div className="about-panels">
            {panels.map((panel, i) => (
              <div key={i} className="info-panel">
                <span className="info-panel__label">{panel.label}</span>
                <p className="info-panel__body">{panel.body}</p>
              </div>
            ))}
          </div>

          {/* Right: outside the screen */}
          <div className="about-outside">
            <h2 className="about-outside__heading">Outside<br />The Screen</h2>
            <p className="about-outside__sub">
              A little more about the human behind the work.
            </p>
            <ul className="about-outside__list">
              {outsideItems.map((item, i) => (
                <li key={i} className="about-outside__item">
                  <span className="about-outside__icon" aria-hidden="true">
                    <img src="/assets/logos/submark.png" alt="" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── Stats Banner ── */}
      <section className="about-stats">
        <div className="about-stats__inner">
          <h2 className="about-stats__title">
            Strategy-first. <span className="about-stats__title--accent">Results driven.</span>
          </h2>
          <div className="about-stats__grid">
            <div className="about-stats__stat">
              <span className="about-stats__num">5+</span>
              <span className="about-stats__label">Years of Experience</span>
            </div>
            <div className="about-stats__stat">
              <span className="about-stats__num">50+</span>
              <span className="about-stats__label">Happy Clients</span>
            </div>
            <div className="about-stats__stat">
              <span className="about-stats__num">3x</span>
              <span className="about-stats__label">Avg. Lead Increase</span>
            </div>
            <div className="about-stats__stat about-stats__stat--featured">
              <span className="about-stats__num">100+</span>
              <span className="about-stats__label">Sites Launched</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Carousel ── */}
      <section className="about-brands">
        <p className="about-brands__label">Brands We've Worked With</p>
        <div className="about-brands__track-wrap">
          <div className="about-brands__track">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="about-brands__item">
                {b.logo && <img src={b.logo} alt={b.name} className={`about-brands__icon${b.large ? ' about-brands__icon--large' : ''}`} />}
                <span className="about-brands__name">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta__cursor" aria-hidden="true">
          <img src="/assets/logos/submark.png" alt="" />
        </div>
        <div className="about-cta__inner">
          <div className="about-cta__text">
            <h2 className="about-cta__heading">
              Let's Make It Worth Clicking.
            </h2>
            <p className="about-cta__body">
              A good-looking site is easy. A site that actually works is different. Let's build something that guides, converts, and feels effortless to use.
            </p>
            <p className="about-cta__sub">Strategic. | Built for real users. | Designed to convert.</p>
          </div>
          <div className="about-cta__right">
            <Link to="/lets-talk" className="btn about-cta__btn">Book a Consult</Link>
          </div>
        </div>
      </section>
    </>
  )
}
