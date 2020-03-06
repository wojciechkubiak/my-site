import React, { useState, useRef } from "react";
import "./../Skills/Skills.css";
import { Popover, OverlayTrigger, ListGroup } from "react-bootstrap";
import shortid from "shortid";

const SkillImg = props => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{props.technology}</Popover.Title>
      <Popover.Content>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">Używanie das dsa das dasd asd asd</ListGroup.Item>
          <ListGroup.Item>Modyfikacja</ListGroup.Item>
        </ListGroup>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <span className="skills--span" onClick={() => setShow(!show)}>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <img className="skills--img" src={props.imgUrl} alt="React-icon" />
        </OverlayTrigger>
      </span>
    </>
  );
};

export default SkillImg;
