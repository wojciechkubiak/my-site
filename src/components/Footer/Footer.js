import React from "react";
import "./Footer.css";

class Footer extends React.PureComponent {
  render() {
    const currentLanguage = this.props.language ? "Created by " : "Strona stworzona przez ";
    
    return (
      <div className="Footer" data-testid="Footer">
        {currentLanguage}
        <strong>Wojciech Kubiak &reg;</strong>
      </div>
    );
  }
}

export default Footer;
