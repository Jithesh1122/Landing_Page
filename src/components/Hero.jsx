export default function Hero({ onGetStarted }) {
  return (
    <header className="hero">
      <p className="hero-kicker">AnimeVerse</p>
      <h1>Discover, Track, and Talk Anime Daily</h1>
      <p className="hero-subtitle">
        Your colorful anime landing hub for seasonal releases, fan-favorite characters, and active episode discussions.
      </p>
      <button className="cta-button" type="button" onClick={onGetStarted}>
        Start Exploring
      </button>
    </header>
  );
}
