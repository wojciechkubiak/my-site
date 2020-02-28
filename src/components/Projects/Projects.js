import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 1,
      data: [
        [
          'Obb-SYS',
          'eng'
        ],
        [
          'Opqn',
          'Mob'
        ],
        [
          'FitTracker',
          'Fit'
        ]
      ]
    }
  }

  swapImage = event => {
    const {img} = this.state
    if(img === 3 && event.target.value === "forward") {
      this.setState({img: 1})
    } else if(img === 1 && event.target.value === "backward") {
      this.setState({img: 3})
    } else {
      this.setState({img: img + parseInt(event.target.name)})
    } 
  }

  render() {
    return (
      <div className="Projects" data-testid="Projects" id="projects">
        <h1>Projects</h1>
        <div className="ProjectsContainer">
          <div className="ImgContainer">
            <img 
              className="Img"
              src={require(`./../../img/${this.state.img}.png`)}
              alt="React-icon"
            />           
          </div>         
          <div className="ProjectInfoContainer">
            <h4>{this.state.data[this.state.img-1][0]}</h4>
            <p>{this.state.data[this.state.img-1][1]}</p>    
          </div>   
        </div>
        <div className="BtnContainer">
            <button name="-1" value="backward" onClick={this.swapImage} className="PrevBtn">&larr;</button>
            <button name="1" value="forward" onClick={this.swapImage} className="NextBtn">&rarr;</button> 
        </div> 
      </div>
    );
  }
}

export default Projects;
