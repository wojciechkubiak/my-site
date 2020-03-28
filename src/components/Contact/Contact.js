import React, { useState, useRef } from "react";
import { FaFileDownload } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { InView } from "react-intersection-observer";
import ResumePL from "./../../doc/cv_pl.pdf";
import ResumeEN from "./../../doc/cv_en.pdf";
import gsap from "gsap";
import "./Contact.css";

const Contact = props => {
  const [notAnimated, setNotAnimated] = useState(false);

  let contactItem = useRef(null);

  const anim = () => {
    gsap.fromTo(
      contactItem,
      { opacity: 0 },
      {
        duration: 1,
        opacity: 1,
        ease: "slow (0.7, 0.7, false)",
        display: "block",
        onComplete: function() {
          setNotAnimated(true);
        }
      }
    );
  };

  //TODO: figcaption font and mobile version 
  return (
    <InView
      as="div"
      data-testid="Contact"
      id="contact"
      onChange={(inView, entry) => {
        if (inView && !notAnimated) {
          anim();
        }
      }}
    >
      <h1>{props.t("contact.header", { framework: "react-i18next" })}</h1>
      <section
        className="ContactContainer"
        ref={e => {
          contactItem = e;
        }}
        data-testid="Contact"
        style={{ display: "none" }}
      >
        <article>
          <h3 style={{color: "#fbd791"}}>
            {props.t("contact.firstLine", { framework: "react-i18next" })}
          </h3>
        </article>
        <article className="contact--article"
        >
          <article>
            <figure>
              <FaFileDownload
                className="contact--icons"
              ></FaFileDownload>
              <figcaption className="contact--figcaption">
                <span>
                  <a
                    href={ResumePL}
                    style={{ color: "#fbd791" }}
                    download="WojciechKubiakCV_PL.pdf"
                  >
                    POL
                  </a>
                </span>
                <strong style={{ color: "#fbd791" }}>  |  </strong>
                <span>
                  <a
                    href={ResumeEN}
                    style={{ color: "#fbd791" }}
                    download="WojciechKubiakCV_EN.pdf"
                  >
                    ENG
                  </a>
                </span>
              </figcaption>
            </figure>
          </article>
          <article>
            <figure>
              <GoMail
               className="contact--icons"
              />
            </figure>
            <figcaption className="contact--figcaption">
              <a
                href="mailto:wgkubiak@gmail.com"
                style={{ color: "#fbd791" }}
              >
                wgkubiak@gmail.com
              </a>
            </figcaption>
          </article>
          <article>
            <figure>
              <FiPhoneCall
               className="contact--icons"
              />
              <figcaption className="contact--figcaption">
                726823405
              </figcaption>
            </figure>
          </article>
        </article>
      </section>
    </InView>
  );
};

export default Contact;
