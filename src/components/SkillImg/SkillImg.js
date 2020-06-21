import React, { useState } from "react";
import "./../Skills/Skills.css";
import { Popover, OverlayTrigger, ListGroup, Tooltip } from "react-bootstrap";

const SkillImg = (props) => {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let skillsData = [];

  const insertSkills = () => {
    for (let i = 1; i < 10; i++) {
      if (
        props.t(`${props.name}.${i}`) !== undefined &&
        props.t(`${props.name}.${i}`) !== `${props.name}.${i}`
      ) {
        skillsData.push(
          props.t(`${props.name}.${i}`, { framework: "react-i18next" })
        );
      }
    }
  };

  insertSkills();

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.technology}</Popover.Title>
      <Popover.Content>
        <ListGroup variant="flush">
          {skillsData.map((value, index) => (
            <ListGroup.Item key={`${value}${index}`}>{value}</ListGroup.Item>
          ))}
        </ListGroup>
      </Popover.Content>
    </Popover>
  );

  useState(() => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="skills--img-container">
      {!isMobile && (
        <OverlayTrigger placement="bottom" overlay={popover}>
          <img
            className="skills--img"
            src={props.imgUrl}
            alt="Skill-img"
            onClick={() => setShow(!show)}
          />
        </OverlayTrigger>
      )}
      {isMobile && (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <img
            className="skills--img"
            src={props.imgUrl}
            alt="Skill-img"
            onClick={() => setShow(!show)}
          />
        </OverlayTrigger>
      )}
    </div>
  );
};

export default SkillImg;
