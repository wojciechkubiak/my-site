import React from "react";
import "./SocialMedia.css";
import { FaLinkedinIn, FaFacebookF, FaGit } from "react-icons/fa";

const SocialMedia = ({ initIconState = false }) => {
  
  const facebookAdress = "https://www.facebook.com/wojciechkubiakfb";
  const linkedinAdress = "https://www.linkedin.com/in/wojciechkubiakin";
  const gitAdress = "https://www.github.com/wojciechkubiak";

  return (
    <div className="SocialMedia">
        <a href={facebookAdress}>
          <button className="FacebookBtn">
            <FaFacebookF className="FacebookIcon" />
          </button>
        </a>
        <a href={linkedinAdress}>
          <button className="LinkedInBtn">
            <FaLinkedinIn className="LinkedInIcon" />
          </button>
        </a>
        <a href={gitAdress}>
        <button className="GitBtn">
          <FaGit className="GitIcon" />
        </button>
      </a>
    </div>
  );
};

export default SocialMedia;
