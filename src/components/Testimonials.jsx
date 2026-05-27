import './Testimonials.css'

const testimonials = [
  {
    quote: "Working with The Site Strategist was the best investment I made for my business. My new site brought in 3 new clients in the first month.",
    name: 'Sarah M.',
    title: 'Owner, Bloom & Co.',
  },
  {
    quote: "I finally have a website I'm proud to send people to. The strategy behind every decision made all the difference.",
    name: 'James R.',
    title: 'Founder, Apex Legal Group',
  },
  {
    quote: "She didn't just build me a website — she built me a system. My discovery calls are booked weeks out now.",
    name: 'Erica T.',
    title: 'Business Coach, Elevate with Erica',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <p className="section-eyebrow">Client Love</p>
          <h2 className="section-title">
            Don't take our <span className="text-coral">word for it.</span>
          </h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonial-card">
              <p className="testimonial-card__quote">"{t.quote}"</p>
              <footer className="testimonial-card__footer">
                <div className="testimonial-card__avatar">{t.name[0]}</div>
                <div>
                  <p className="testimonial-card__name">{t.name}</p>
                  <p className="testimonial-card__title">{t.title}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
