import React, { Component } from "react";
import Footer from './../Footer/Footer';
import "./Contact.css";
import { FaGit } from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div className="Contact" data-testid="Contact" id="contact">
        <h1>Contact</h1>
        <div className="ContactContainer" data-testid="Contact">
          <h1>Get in touch</h1>
          <p>Are you interested in working with me or just have a question?</p>
          <p>
            Email me at{" "}
            <a href="mailto:wgkubiak@gmail.com" className="MailContainer">
              <strong>wgkubiak@gmail.com</strong>
            </a>
          </p>
          <p>or</p>
          <p>Send me a message at 726 823 405</p>
        </div>
        <div className="GitContainer">
          <a href={"https://www.github.com/wgkubiak"}>
            <button className="GitBtn">
              <FaGit className="GitIcon" />
            </button>
          </a>
          <p>/wgkubiak</p>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Contact;
