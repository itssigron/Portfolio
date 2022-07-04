import React from "react";
import Card from "react-bootstrap/Card";
import { CgGames } from "react-icons/cg";
import { ImPointRight } from "react-icons/im";
import { SiNetflix, SiSpotify } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There 👋, My name is <span className="purple">Harel Sigron </span>and i'm from <span className="purple">Israel</span>.
            <br />
            I'm a professional developer (<span style={{fontSize: "22px"}} className="purple">4.5</span> years of <span className="purple">experience</span> in total).
            <br /><br />
            <span className="purple">Backend Development:</span><br />
            Node.js - <span style={{fontSize: "22px"}} className="purple">4.5</span> years<br />
            <br />
            <span className="purple">Frontend Development:</span><br />
            Pure JavaScript - <span style={{fontSize: "22px"}} className="purple">2</span> years<br />
            HTML - <span style={{fontSize: "22px"}} className="purple">2</span>  years<br />
            CSS - <span style={{fontSize: "22px"}} className="purple">2</span>  years<br />
            <br />
            Currently operating as a CEO for <a className="purple" href="https://fly2host.net" style={{ fontWeight: 600, textDecoration: "none" }}>Fly2Host</a>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "4px" }} />  Play Games <CgGames />
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "2px" }} /> Listen To Music <SiSpotify />
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "4px" }} /> Watch Netflix <SiNetflix />
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you can imagine it, you can achieve it. If you can dream it, you can become it."
          </p>
          <footer className="blockquote-footer">William Arthur Ward</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
