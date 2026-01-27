import React from 'react';
import FallingPetals from './components/FallingPetals';
import Hero from './components/Hero';
import Workshop from './components/Workshop';
import InfoCards from './components/InfoCards';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Performances from './components/Performances';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-[#1a0b2e] text-white selection:bg-pink-500 selection:text-white relative">
      {/* Fixed Background Layer */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2076&auto=format&fit=crop" 
          alt="Spring Forest" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#1a0b2e]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-purple-900/20 to-[#1a0b2e]/90" />
      </div>

      <FallingPetals />
      
      <main className="relative z-10">
        <Hero />
        <InfoCards />
        <Workshop />
        <Performances />
        <Pricing />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;