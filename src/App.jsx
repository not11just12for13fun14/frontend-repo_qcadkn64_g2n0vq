import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import InteractiveCards from './components/InteractiveCards.jsx';
import CompanyInfo from './components/CompanyInfo.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <InteractiveCards />
        <CompanyInfo />
      </main>
    </div>
  );
}

export default App;
