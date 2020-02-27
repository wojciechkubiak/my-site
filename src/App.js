import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import LandingPage from './components/LandingPage/LandingPage'
import SocialMedia from './components/SocialMedia/SocialMedia'
import {Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  state = {
    headerMode: false
  }

  //TODO: call this functions onScroll, not click
  headerTransparent = () => {
    this.setState({headerMode: false});
  }

  headerNotTransparent = () => {
    this.setState({headerMode: true})
  }
  // -----------------------------------------
  
  render() {
    return (
      <div className="App">
        <img className="bg" src={require('./img/bg_blur.jpg')} alt="React-icon" />
        <Header headerMode={this.state.headerMode}/>
        <LandingPage/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <SocialMedia/>
        {/* Temporary buttons */}
        <Button className="btnnn" onClick={this.headerNotTransparent}>Widzialny</Button>
        <Button className="btnnnn" onClick={this.headerTransparent}>Tutaj kliknij</Button>
      </div>
    );
  }
}

export default App;
