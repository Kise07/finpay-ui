import './App.css'
import Hero from './sections/Hero';
import Navbar from './sections/Navbar';
import FeatureCard from './sections/PassingProps';
import { Zap, Landmark, ShieldHalf } from "lucide-react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex gap-6 px-10 justify-content-center">
        <FeatureCard
          icon={<Zap size={24} />}
          title="Free transfers"
          description="Create a financial experience..."
        />
        <FeatureCard
          icon={<Landmark size={24} />}
          title="Free transfers"
          description="Create a financial experience..."
        />
        <FeatureCard
          icon={<ShieldHalf size={24} />}
          title="Free transfers"
          description="Create a financial experience..."
        />
      </div>
    </>
  )
}

export default App
