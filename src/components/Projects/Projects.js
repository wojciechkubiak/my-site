import React from 'react';
import './Projects.css';

//TODO: Info onClick on project img
const Projects = () => (
  <div className="Projects" data-testid="Projects" id="projects">
    <h1>Projects</h1>
    <div className="ProjectsContainer">
      <img className="PhoneImg" src={require('./../../img/1res.png')} onClick={(event) => alert(event.target.src)} alt="React-icon" />
      <img className="MonitorImg" src={require('./../../img/21.png')} onClick={(event) => alert(event.target.src)} alt="React-icon" />
      <img className="TabletImg" src={require('./../../img/12.png')} onClick={(event) => alert(event.target.src)} alt="React-icon" />
    </div>
  </div>
);

export default Projects;
