import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contactme';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Education />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
