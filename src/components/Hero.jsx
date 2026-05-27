import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__eyebrow">Website Strategy + Design</p>
        <h1 className="hero__headline">
          Your website should <span className="hero__accent">work</span> as hard<br />
          as you do.
        </h1>
        <p className="hero__sub">
          We help small businesses and entrepreneurs build strategic, scroll-stopping
          websites that attract the right clients and convert them into customers.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary">Book a Free Consult</a>
          <a href="#work" className="btn btn--outline">See Our Work</a>
        </div>
      </div>
    </section>
  )
}
