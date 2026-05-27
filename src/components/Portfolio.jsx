import './Portfolio.css'

const projects = [
  {
    category: 'E-commerce + Brand Identity',
    title: 'Bloom & Co. Floral Studio',
    desc: 'Full brand identity and Shopify site for a boutique floral studio. Increased online bookings by 240% in 3 months.',
    color: 'var(--salmon)',
  },
  {
    category: 'Service Business Website',
    title: 'Apex Legal Group',
    desc: 'Strategy-led website redesign for a growing law firm. Clear messaging hierarchy that cut their bounce rate in half.',
    color: 'var(--mint)',
  },
  {
    category: 'Coaching + Personal Brand',
    title: 'Elevate with Erica',
    desc: 'Brand identity and 5-page coaching site built to book discovery calls on autopilot.',
    color: 'var(--coral)',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="portfolio">
      <div className="portfolio__inner">
        <div className="portfolio__header">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-title">
            Results that <span className="text-coral">speak for themselves.</span>
          </h2>
        </div>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <article key={i} className="portfolio-card">
              <div className="portfolio-card__thumb" style={{ background: p.color }}>
                <img src="/assets/logos/submark.png" alt="" className="portfolio-card__logo" />
              </div>
              <div className="portfolio-card__body">
                <span className="portfolio-card__cat">{p.category}</span>
                <h3 className="portfolio-card__title">{p.title}</h3>
                <p className="portfolio-card__desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
