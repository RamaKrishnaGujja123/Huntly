import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Careers from "./components/Careers";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";


function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <Portfolio />
        <Careers />
        <Blog />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;