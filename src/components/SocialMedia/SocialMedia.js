import React, { useState } from "react";
import "./SocialMedia.css";
import { FaLinkedinIn, FaFacebookF, FaGit } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const SocialMedia = () => {
  const facebookAdress = "https://www.facebook.com/wojciechkubiakfb";
  const linkedinAdress = "https://www.linkedin.com/in/wojciechkubiakin";
  const gitAdress = "https://www.github.com/wojciechkubiak";
  const [showSocial, setShowSocial] = useState(true);

  const socialHandler = () => setShowSocial(!showSocial);

  return (
    <>
      <button className="social--btn-hide" style={{outline: "none"}} onClick={socialHandler}>
        {showSocial && <IoMdArrowRoundBack style={{ color: "#ffffff" }} />}
        {!showSocial && <IoMdArrowRoundForward style={{ color: "#ffffff" }} />}
      </button>
      {showSocial && (
        <>
          <a href={facebookAdress}>
            <button
              className="social--btn-links"
            >
              <FaFacebookF style={{ color: "#ffffff" }} />
            </button>
          </a>
          <a href={linkedinAdress}>
            <button
             className="social--btn-links"
            >
              <FaLinkedinIn style={{ color: "#ffffff" }} />
            </button>
          </a>
          <a href={gitAdress}>
            <button
             className="social--btn-links"
            >
              <FaGit style={{ color: "#ffffff" }} />
            </button>
          </a>
        </>
      )}
    </>
  );
};

export default SocialMedia;
