import React, { useEffect, useRef, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { Overlay } from "react-bootstrap";
import ResumePL from "./../../doc/cv_pl.pdf";
import ResumeEN from "./../../doc/cv_en.pdf";
import { gsap } from "gsap";

import "./Contact.css";
import { Popover, PopoverTitle } from "react-bootstrap";

const Contact = (props) => {
  const t1 = gsap.timeline();
  let sectionItem = useRef(null);
  const phone = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    if(!props.isMobile) {
     gsap.fromTo(
       container,
       {
         left: -window.innerWidth,
       },
       {
         duration: 2,
         left: 0,
       }
     );
    }
   }, []);
 
  
  useEffect(() => {
    if (props.hide && !props.isMobile) {
      gsap.fromTo(
        container,
        {
          left: 0,
        },
        {
          duration: 1,
          left: -window.innerWidth,
        }
      );
    }
  }, [props.hide]);

  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText('726823405');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000)
  }

  return (
    <div id="contact" ref={e => container = e}>
      <div
        className="contact--main"
        ref={(e) => {
          sectionItem = e;
        }}
      >
        <section className="contact--container" data-testid="Contact">
          <article>
            <h2 style={{ textTransform: "uppercase" }}>
              {props.t("contact.box", { framework: "react-i18next" })}
            </h2>
            <h3>
              {props.t("contact.firstLine", { framework: "react-i18next" })}
            </h3>
          </article>
          <article className="contact--article">
            <article>
              <figure>
                <FaFileDownload className="contact--icons"></FaFileDownload>
                <figcaption className="contact--figcaption">
                  <span>
                    <a
                      href={ResumePL}
                      style={{ color: "#ffffff", paddingRight: "1em" }}
                      download="WojciechKubiakCV_PL.pdf"
                    >
                      pol
                    </a>
                  </span>
                  <span>
                    <a
                      href={ResumeEN}
                      style={{
                        color: "#ffffff",
                        borderLeft: "1px solid #ffffff",
                        paddingLeft: "1em",
                      }}
                      download="WojciechKubiakCV_EN.pdf"
                    >
                      eng
                    </a>
                  </span>
                </figcaption>
              </figure>
            </article>
            <article>
              <figure>
                <GoMail className="contact--icons" />
              </figure>
              <figcaption className="contact--figcaption">
                <a
                  href="mailto:wgkubiak@gmail.com"
                  style={{ color: "#ffffff" }}
                >
                  wojciechkubiak@pm.me
                </a>
              </figcaption>
            </article>
            <article>
              <figure>
                <FiPhoneCall className="contact--icons" />
                <figcaption onClick={copy} className="contact--figcaption">
                  726823405
                </figcaption>
                <Overlay
                  show={copied}
                  placement="top"
                >
                  <Popover style={{border: "none"}}>
                    <PopoverTitle>
                    {props.t("tooltip.copied", { framework: "react-i18next" })}
                    </PopoverTitle>
                  </Popover>
                </Overlay>
              </figure>
            </article>
          </article>
        </section>
      </div>
      {/*<Footer t={props.t} />*/}
    </div>
  );
};

export default Contact;
