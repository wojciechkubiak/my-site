import React from "react";
import "./SocialMedia.css";
import { FaLinkedinIn, FaFacebookF, FaGit } from "react-icons/fa";

const SocialMedia = ({ initIconState = false }) => {
  
  const facebookAdress = "https://www.facebook.com/wojciechkubiakfb";
  const linkedinAdress = "https://www.linkedin.com/in/wojciechkubiakin";
  const gitAdress = "https://www.github.com/wojciechkubiak";

  return (
    <>
        <a href={facebookAdress}>
          <button style={{backgroundColor: "transparent", border: "none", width: "3em", height: "3em"}}>
            <FaFacebookF style={{color: "#fbd791"}}/>
          </button>
        </a>
        <a href={linkedinAdress}>
          <button style={{backgroundColor: "transparent", border: "none", width: "3em", height: "3em"}}>
            <FaLinkedinIn style={{color: "#fbd791"}}/>
          </button>
        </a>
        <a href={gitAdress}>
        <button style={{backgroundColor: "transparent", border: "none", width: "3em", height: "3em"}}>
          <FaGit style={{color: "#fbd791"}}/>
        </button>
      </a>
    </>
  );
};

export default SocialMedia;
