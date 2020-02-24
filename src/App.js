import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import LandingPage from './components/LandingPage/LandingPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
