export default function Hero({ onGetStarted }) {
  return (
    <header className="hero">
      <p className="hero-kicker">PulseFlow</p>
      <h1>Ship Better Products in One Workspace</h1>
      <p className="hero-subtitle">
        Plan roadmaps, align teams, and track execution with a modern platform built for fast-moving product organizations.
      </p>
      <button className="cta-button" type="button" onClick={onGetStarted}>
        Explore Features
      </button>
    </header>
  );
}
