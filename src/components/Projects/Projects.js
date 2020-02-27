import React from 'react';
import './Projects.css';

const Projects = () => (
  <div className="Projects" data-testid="Projects" id="projects">
    <div className="ProjectsContainer">
      <img className="PhoneGif" src={require('./../../img/phone.gif')} onClick={(event) => alert(event.target.src)} alt="React-icon" />
      <img className="MonitorGif" src={require('./../../img/monitor.gif')} onClick={(event) => alert(event.target.src)} alt="React-icon" />
      <img className="TabletGif" src={require('./../../img/tablet.gif')} onClick={(event) => alert(event.target.src)} alt="React-icon" />
    </div>
  </div>
);

export default Projects;
