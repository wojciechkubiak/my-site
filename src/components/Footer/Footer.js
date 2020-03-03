import React from "react";
import "./Footer.css";

const Footer = props => (
  <div className="Footer" data-testid="Footer">
    {props.language ? "Created by " : "Strona stworzona przez "}{" "}
    <strong>Wojciech Kubiak &reg;</strong>
  </div>
);

export default Footer;
