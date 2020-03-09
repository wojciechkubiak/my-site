import React, { useState } from "react";
import "./../Skills/Skills.css";
import { Popover, OverlayTrigger, ListGroup } from "react-bootstrap";

const SkillImg = props => {
  const [show, setShow] = useState(false);
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
            <ListGroup.Item>{value}</ListGroup.Item>
          ))}
        </ListGroup>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="skills--img-container">
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <img
          className="skills--img"
          src={props.imgUrl}
          alt="Skill-img"
          onClick={() => setShow(!show)}
        />
      </OverlayTrigger>
    </div>
  );
};

export default SkillImg;
