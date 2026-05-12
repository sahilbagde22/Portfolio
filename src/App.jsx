import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import ResumeSection from './components/sections/ResumeSection';
import Contact from './components/sections/Contact';
import AIAssistant from './components/sections/AIAssistant';
import CursorGlow from './components/ui/CursorGlow';
import NeuralBackground from './components/ui/NeuralBackground';
import MusicPlayer from './components/ui/MusicPlayer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen text-[#E0E0E0] selection:bg-core-red/30 relative">
      <NeuralBackground />
      <CursorGlow />
      <Navbar onOpenChat={() => setIsChatOpen(true)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Achievements />
        <Education />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
      <AIAssistant isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </div>
  );
}

export default App;
