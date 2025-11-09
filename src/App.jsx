import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractiveCards from "./components/InteractiveCards";
import ParallaxShowcase from "./components/ParallaxShowcase";
import Showcase from "./components/Showcase";
import CompanyInfo from "./components/CompanyInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <InteractiveCards />
      <ParallaxShowcase />
      <Showcase />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default App;
