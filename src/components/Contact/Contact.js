import React, { useEffect, useRef} from "react";
import { FaFileDownload } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import ResumePL from "./../../doc/cv_pl.pdf";
import ResumeEN from "./../../doc/cv_en.pdf";
import {gsap} from "gsap";

import "./Contact.css";

const Contact = props => {
  const t1 = gsap.timeline();
  let sectionItem = useRef(null);

  useEffect(() => {
    if(!props.animComplete) {
      t1.fromTo(
          sectionItem,
          { opacity: 0, x: -2000 },
          {
            duration: 2,
            ease: "slow (0.7, 0.7, false)",
            opacity: 1,
            x: 0,
            onComplete: () => {
              props.setAnimComplete(true);
            }
          }
      );
    } else {
      t1.fromTo(
          sectionItem,
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
      )
    }
  }, []);

  return (
      <div id="contact">
      <div
        className="contact--main"
        style={{ opacity: "0" }}
        ref={e => {
          sectionItem = e;
        }}
      >
        <section
          className="contact--container"
          data-testid="Contact"

        >
          <article>
            <h2 style={{textTransform: "uppercase"}}>{props.t("contact.box", { framework: "react-i18next" })}</h2>
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
                        paddingLeft: "1em"
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
                <figcaption className="contact--figcaption">
                  726823405
                </figcaption>
              </figure>
            </article>
          </article>
        </section>
      </div>
      </div>
  );
};

export default Contact;
