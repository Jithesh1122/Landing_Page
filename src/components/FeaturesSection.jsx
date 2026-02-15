import FeatureCard from "./FeatureCard";

export default function FeaturesSection({ features }) {
  return (
    <section className="features" id="features" aria-label="Product Features">
      <div className="section-header">
        <h2>Everything Your Team Needs to Deliver</h2>
        <p>Purpose-built tools for planning, collaboration, and measurable product growth.</p>
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
