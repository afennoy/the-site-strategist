import './Services.css'

const services = [
  {
    icon: '🗺️',
    title: 'Website Strategy',
    desc: 'Before a single pixel is placed, we build your site strategy — sitemap, user flow, content plan, and conversion goals — so every decision has a purpose.',
  },
  {
    icon: '✦',
    title: 'Custom Web Design',
    desc: 'Scroll-stopping, on-brand websites designed to impress your ideal clients and guide them toward action. No templates, no shortcuts.',
  },
  {
    icon: '🎨',
    title: 'Brand Identity',
    desc: 'Logo, color palette, typography, and brand guidelines that set you apart and make your business instantly recognizable.',
  },
  {
    icon: '📈',
    title: 'SEO + Content Strategy',
    desc: 'Get found by the right people. We weave SEO best practices and strategic copy into your site from day one.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="services__header">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">
            Services built for <span className="text-coral">real results.</span>
          </h2>
          <p className="services__sub">
            Whether you need a strategy session or a full site build, every engagement
            is customized to your business goals.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <span className="service-card__icon">{s.icon}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <a href="#contact" className="btn btn--primary">Get a Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
