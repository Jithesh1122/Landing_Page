import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";

const featureItems = [
  {
    title: "Season Tracker",
    description:
      "Follow current and upcoming anime seasons with smart watchlists and episode reminders.",
    icon: "TV",
  },
  {
    title: "Character Hub",
    description:
      "Explore top characters, studios, and voice actors with rich profiles and fan ratings.",
    icon: "CH",
  },
  {
    title: "Community Rooms",
    description:
      "Join live discussions after new episodes, share theories, and post your favorite scenes.",
    icon: "FM",
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
