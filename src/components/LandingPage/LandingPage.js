import React, {useState, useEffect} from "react";
import "./LandingPage.css";

const LandingPage = props => {
  const startingClass = ["home--container"];
  
  const [anim, setAnim] = useState(startingClass);

  useEffect(() => {
    animElement();
  }, [anim])

  const animElement = () => {
    setTimeout(() => {
      setAnim(["home--container", "home--container-anim"])
    }, 500)
  }
  
  return (
    <div className="home" id="landing" data-testid="Home">
      <section className={anim.join(" ")}>
        <h1>
          Wojciech
          <br />
          Kubiak
        </h1>
        <article>
          <p>{props.t("aboutme.content", { framework: "react-i18next" })}</p>
        </article>
      </section>
      <div className="image--holder" style={{width: "50em", height: "50em", position: "absolute", right: "0em"}}></div>
    </div>
  );
};

export default LandingPage;
