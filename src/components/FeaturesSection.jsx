import FeatureCard from "./FeatureCard";

export default function FeaturesSection({ features }) {
  return (
    <section className="features" id="features" aria-label="Anime Features">
      <div className="section-header">
        <h2>Everything Anime Fans Need</h2>
        <p>Built for binge-watchers, collectors, and community-first fans.</p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
