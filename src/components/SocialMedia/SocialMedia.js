import React, { useState } from "react";
import "./SocialMedia.css";
import { FaLinkedinIn, FaFacebookF, FaGit } from "react-icons/fa";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const SocialMedia = ({ initIconState = false }) => {
  
  const facebookAdress = "https://www.facebook.com/wojciechkubiakfb";
  const linkedinAdress = "https://www.linkedin.com/in/wojciechkubiakin";
  const gitAdress = "https://www.github.com/wojciechkubiak";
  const [showSocial, setShowSocial] = useState(true);

  const socialHandler = () => setShowSocial(!showSocial);

  return (
    <>
        <button 
          style={{backgroundColor: "#424142", outline: "none", border: "none", borderRadius: "2em", width: "3em", height: "3em"}}
          onClick={socialHandler}
        >
          {showSocial && (
            <IoMdArrowRoundBack style={{color: "#ffffff"}}/>
          )}
          {!showSocial && (
             <IoMdArrowRoundForward style={{color: "#ffffff"}}/>
          )}
        </button>
        {showSocial && (
         <>
        <a href={facebookAdress}>
           <button style={{backgroundColor: "#424142", border: "none", borderTopLeftRadius: "2em", borderBottomLeftRadius: "2em", width: "3em", height: "3em"}}>
             <FaFacebookF style={{color: "#ffffff"}}/>
           </button>
         </a>
         <a href={linkedinAdress}>
           <button style={{backgroundColor: "#424142", border: "none", width: "3em", height: "3em"}}>
             <FaLinkedinIn style={{color: "#ffffff"}}/>
           </button>
         </a>
         <a href={gitAdress}>
         <button style={{backgroundColor: "#424142", border: "none", borderTopRightRadius: "2em", borderBottomRightRadius: "2em", width: "3em", height: "3em"}}>
           <FaGit style={{color: "#ffffff"}}/>
         </button>
        </a>
         </>
        )}
    </>
  );
};

export default SocialMedia;
