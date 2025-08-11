import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import CoreValues from "./components/CoreValues";
import ProfessionalBackground from "./components/ProfessionalBackground";
import AfroSocialite from "./components/AfroSocialite";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <ProfessionalBackground />
      </main>
      <Footer />
    </div>
  );
}

export default App;
