import React from "react";
import "./Footer.css";

const Footer = props => {
  const currentLanguage = props.language
    ? "Created by "
    : "Strona stworzona przez ";

  return (
    <div className="Footer" data-testid="Footer">
      {currentLanguage}
      <strong>Wojciech Kubiak &reg;</strong>
    </div>
  );
};

export default Footer;
