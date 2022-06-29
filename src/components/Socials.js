import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

function Socials()
{
    return (
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/itssigron"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/users/382572416708116482"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/its_sigron/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
    )
}

export default Socials;