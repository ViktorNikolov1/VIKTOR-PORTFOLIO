import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cyber-dark min-h-screen text-white selection:bg-cyber-primary selection:text-cyber-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}

export default App;
