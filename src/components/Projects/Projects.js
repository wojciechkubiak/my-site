import React from 'react';
import './Projects.css';

const Projects = () => (
  <div className="Projects" data-testid="Projects" id="projects">
    <div className="ProjectsContainer">
      <img className="ProjectsGif" src={require('./../../img/opqn.gif')} alt="React-icon" />
    </div>
  </div>
);

export default Projects;
