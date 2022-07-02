import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { SiDiscord } from "react-icons/si";

function SocialIcon(props) {
  return (
    <li className="social-icons">
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
        data-tip={props.tooltip}
        data-delay-show="150"
      >
        <props.icon />
      </a>
    </li>
  )
}

function Socials() {
  return (
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <SocialIcon icon={AiFillGithub} url="https://github.com/itssigron" tooltip="Github" />
          <SocialIcon icon={ImLinkedin2} url="https://www.linkedin.com/in/harel-sigron" tooltip="LinkedIn" />
          <SocialIcon icon={SiDiscord} url="https://discord.com/users/382572416708116482" tooltip="Discord" />
          <SocialIcon icon={AiFillInstagram} url="https://www.instagram.com/its_sigron" tooltip="Instagram" />
        </ul>
      </Col>
    </Row>
  )
}

export default Socials;