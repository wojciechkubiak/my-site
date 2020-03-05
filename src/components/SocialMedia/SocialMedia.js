import React, { useState } from "react";
import "./SocialMedia.css";
import { MdContacts } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const SocialMedia = ({ initIconState = false }) => {
  const [icons, setIcons] = useState(initIconState);

  const toggleIcons = () => {
    setIcons(!icons);
  };

  const facebookAdress = "https://www.facebook.com/wojciech.kubiak.564";
  const linkedinAdress = "https://www.linkedin.com/in/wokub/";

  return (
    <div className="SocialMedia">
      {icons && (
        <a href={facebookAdress}>
          <button className="FacebookBtn">
            <FaFacebookF className="FacebookIcon" />
          </button>
        </a>
      )}
      {icons && (
        <a href={linkedinAdress}>
          <button className="LinkedInBtn">
            <FaLinkedinIn className="LinkedInIcon" />
          </button>
        </a>
      )}
      <button className="SocialMediaBtn" onClick={toggleIcons} >
        <MdContacts className="SocialMediaIcon"/>
      </button>
    </div>
  );
};

export default SocialMedia;
