import React from 'react';
import './About.css';

const About = () => (
  <div className="About" data-testid="About" id="about"> 
      <div className="AboutContainer">     
      <img className="AboutImg" alt="Writing" src={require('./../../img/writing.png')} ></img>     
        <h1>About me</h1>
        <div className="AboutText">
          <p>
            Hi! My name is Wojtek and I'm student of Computer Science and Measuring Systems at the University of Wroclaw.  
            I am passionate about creating nice looking web applications using modern technologies. 
            I got [zaraziłem się] with this passion during numerous individual and university projects. 
            In each of them I [wykazałem się] creativy, consistency and attention to the quality of the application and code. 
            During my studies, I also had the opportunity to participate in internships and programming internships.
            [Podczas ich trwania] I learned how to work in the SCRUM system, how to communicate with client while receiving 
            an application creation order and how to program with modern standards.
          </p>
        </div>
      </div>    
  </div>
);

export default About;
