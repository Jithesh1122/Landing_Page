import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";

const featureItems = [
  {
    title: "Smart Workflow Builder",
    description:
      "Automate repetitive tasks with visual pipelines and event-based triggers.",
    icon: "WF",
  },
  {
    title: "Unified Team Workspace",
    description:
      "Keep product, design, and engineering aligned in one collaborative dashboard.",
    icon: "TM",
  },
  {
    title: "Real-Time Insights",
    description:
      "Track performance instantly with clean analytics and actionable recommendations.",
    icon: "AN",
  },
];

export default function App() {
  const handleGetStarted = () => {
    const featuresEl = document.getElementById("features");
    if (featuresEl) {
      featuresEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-shell">
      <Hero onGetStarted={handleGetStarted} />
      <FeaturesSection features={featureItems} />
    </div>
  );
}
