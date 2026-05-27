import './ComingSoonPage.css'

export default function ComingSoonPage() {
  return (
    <div className="cs">
      <img
        src="/assets/logos/primary-logo.png"
        alt="The Site Strategist"
        className="cs__logo"
      />
      <p className="cs__heading">COMING SOON</p>
      <div className="cs__spinner" />
    </div>
  )
}
