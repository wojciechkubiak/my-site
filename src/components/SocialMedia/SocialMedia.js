import React, { Component } from "react";
import "./SocialMedia.css";
import { MdContacts } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcons: false,
      facebook: "https://www.facebook.com/wojciech.kubiak.564",
      linkedin: "https://www.linkedin.com/in/wokub/"
    };
    this.toggleIcons = this.toggleIcons.bind(this);
  }

  toggleIcons = () => {
    const { showIcons } = this.state;
    this.setState({ showIcons: !showIcons });
  };

  render() {
    return (
      <div className="SocialMedia">
        {this.state.showIcons && (
          <a href={this.state.facebook}>
            <button className="FacebookBtn">
              <FaFacebookF className="FacebookIcon" />
            </button>
          </a>
        )}
        {this.state.showIcons && (
          <a href={this.state.linkedin}>
            <button className="LinkedInBtn">
              <FaLinkedinIn className="LinkedInIcon" />
            </button>
          </a>
        )}
        <button className="SocialMediaBtn">
          <MdContacts className="SocialMediaIcon" onClick={this.toggleIcons} />
          Social
        </button>
      </div>
    );
  }
}

export default SocialMedia;
