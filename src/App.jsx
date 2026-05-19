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
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen text-zinc-900 dark:text-[#E0E0E0] selection:bg-core-red/30 relative bg-zinc-50 dark:bg-transparent transition-colors duration-300">
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
    </ThemeProvider>
  );
}

export default App;
