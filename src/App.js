import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Education />
    </div>
  );
}

export default App;
