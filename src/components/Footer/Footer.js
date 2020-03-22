import React from "react";
import "./Footer.css";

const Footer = props => {
  return (
    <footer>
      {props.t("footer.text", { framework: "react-i18next" })}{" "}
      Wojciech Kubiak &reg;
    </footer>
  );
};

export default Footer;
