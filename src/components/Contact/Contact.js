import React, { useEffect } from "react";
import {useInView} from "react-intersection-observer";
import { FaFileDownload } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import ResumePL from "./../../doc/cv_pl.pdf";
import ResumeEN from "./../../doc/cv_en.pdf";
import "./Contact.css";

const Contact = props => {
  const [ref, inView] = useInView({
    threshold: 0.8
  })

  useEffect(() => {
    props.activeHandler(inView)
  }, [inView])

  return (
      <div id="contact" ref={ref}>
      <h1>{props.t("contact.header", { framework: "react-i18next" })}</h1>
      <div
        className="contact--main"
      >
        <section
          className="contact--container"
          data-testid="Contact"
        >
          <article>
            <h3 style={{ color: "#fbd791" }}>
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
                      style={{ color: "#fbd791", paddingRight: "1em" }}
                      download="WojciechKubiakCV_PL.pdf"
                    >
                      pol
                    </a>
                  </span>
                  <span>
                    <a
                      href={ResumeEN}
                      style={{
                        color: "#fbd791",
                        borderLeft: "1px solid #fbd791",
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
                  style={{ color: "#fbd791" }}
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
