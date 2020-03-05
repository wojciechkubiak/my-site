import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="Footer" data-testid="Footer">
      {props.t("footer.text", { framework: "react-i18next" })}{" "}
      <strong>Wojciech Kubiak &reg;</strong>
    </div>
  );
};

export default Footer;
