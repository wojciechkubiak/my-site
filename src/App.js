import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import LandingPage from './components/LandingPage/LandingPage'
import SocialMedia from './components/SocialMedia/SocialMedia'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <SocialMedia/>
    </div>
  );
}

export default App;
