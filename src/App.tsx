import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { Projects } from './components/Projects';
import { Toolkit } from './components/Toolkit';
import { About } from './components/About';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Quote />
      <Projects />
      <Toolkit />
      <About />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;