import './App.css'
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import FeatureCard from './sections/PassingProps';
import { Zap, Landmark, ShieldHalf } from "lucide-react";

function App() {
  const features = [
    { icon: <Zap size={24} />, title: "Free transfers", description: "..." },
    { icon: <Zap size={24} />, title: "Free transfers", description: "..." },
    { icon: <Zap size={24} />, title: "Free transfers", description: "..." },
  ]
  return (
    <>
      <Navbar />
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </>
  )
}

export default App
