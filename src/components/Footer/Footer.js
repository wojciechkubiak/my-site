import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      {props.t("footer.text", { framework: "react-i18next" })}{" "}
      <strong>Wojciech Kubiak &reg;</strong>
    </footer>
  );
};

export default Footer;
