import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractiveCards from "./components/InteractiveCards";
import CompanyInfo from "./components/CompanyInfo";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <InteractiveCards />
      <CompanyInfo />
    </div>
  );
}

export default App;
