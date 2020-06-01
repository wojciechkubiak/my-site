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

  const btnStyle = ["social--btn-hide", showSocial ? " " : "social--btn-show"];

  return (
    <>
      <button className={btnStyle.join(" ")} style={{outline: "none"}} onClick={socialHandler}>
        {showSocial && <IoMdArrowRoundBack style={{ color: "#424142" }} />}
        {!showSocial && <IoMdArrowRoundForward style={{ color: "#424142" }} />}
      </button>
      {showSocial && (
        <>
          <a href={facebookAdress}>
            <button
              style={{
                backgroundColor: "#424142",
                border: "none",
                borderTop: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                width: "3em",
                height: "3em",
              }}
            >
              <FaFacebookF style={{ color: "#ffffff" }} />
            </button>
          </a>
          <a href={linkedinAdress}>
            <button
              style={{
                backgroundColor: "#424142",
                border: "none",
                borderTop: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                width: "3em",
                height: "3em",
              }}
            >
              <FaLinkedinIn style={{ color: "#ffffff" }} />
            </button>
          </a>
          <a href={gitAdress}>
            <button
              style={{
                backgroundColor: "#424142",
                border: "none",
                borderTop: "2px solid #ffffff",
                borderBottom: "2px solid #ffffff",
                borderRight: "2px solid #ffffff",
                borderTopRightRadius: "2em",
                borderBottomRightRadius: "2em",
                width: "3em",
                height: "3em",
              }}
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
