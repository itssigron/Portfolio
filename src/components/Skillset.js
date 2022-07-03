import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiNodejsSmall,
    DiHtml5, DiCss3,
    DiPython,
    DiGit,
    DiMongodb,
    DiGithubBadge,
    DiReact
} from "react-icons/di";
import {
    SiArduino,
    SiC,
    SiCsharp,
    SiDocker,
    SiElectron,
    SiExpress,
    SiFlask,
    SiGnubash,
    SiJavascript,
    SiLinux,
    SiMariadb,
    SiMysql,
    SiNginx,
    SiOpencv,
    SiRedis,
    SiTypescript,
    SiVisualstudio,
    SiVisualstudiocode,
    SiWindows
} from "react-icons/si";
import ReactTooltip from 'react-tooltip';

const techstack = [
    { icon: DiHtml5, tooltip: "HTML 5" },
    { icon: DiCss3, tooltip: "CSS 3" },
    { icon: SiJavascript, tooltip: "JavaScript" },
    { icon: SiTypescript, tooltip: "TypeScript" },
    { icon: DiNodejsSmall, tooltip: "NodeJS" },
    { icon: DiReact, tooltip: "ReactJS" },
    { icon: SiExpress, tooltip: "ExpressJS" },
    { icon: SiElectron, tooltip: "ElectronJS" },
    { icon: DiPython, tooltip: "Python" },
    { icon: SiFlask, tooltip: "Flask" },
    { icon: SiC, tooltip: "C" },
    { icon: SiCsharp, tooltip: "C#" },
    { icon: SiGnubash, tooltip: "Bash" },
    { icon: DiGit, tooltip: "Git" },
    { icon: DiGithubBadge, tooltip: "Github" },
    { icon: DiMongodb, tooltip: "MongoDB" },
    { icon: SiMariadb, tooltip: "MariaDB" },
    { icon: SiMysql, tooltip: "MySQL" },
    { icon: SiRedis, tooltip: "Redis" },
    { icon: SiDocker, tooltip: "Docker" },
    { icon: SiOpencv, tooltip: "OpenCV" },
    { icon: SiArduino, tooltip: "Arduino" },
    { icon: SiNginx, tooltip: "Nginx" }
]

const toolstack = [
    { icon: SiWindows, tooltip: "Windows" },
    { icon: SiLinux, tooltip: "Linux" },
    { icon: SiVisualstudio, tooltip: "Visual Studio" },
    { icon: SiVisualstudiocode, tooltip: "Visual Studio Code" }
]

function handleTooltip(type, e)
{
    e = e.target;
    let tag = e.tagName.toLowerCase();
    let elm = ({"svg": e, "div": e.firstChild, "path": e.parentNode})[tag];

    if(elm)
    {
        elm.dispatchEvent(new CustomEvent(`custommouse${type}`, { currentTarget: elm }));
    } else {
        console.log("Unidentified element in handleTooltip.", { e, type });
    }
}

function SkillsetBuilder({ list }) {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {list.map((skill) => (
                <Col xs={4} md={2} className="tech-icons" onMouseEnter={handleTooltip.bind(null, "enter")} onMouseLeave={handleTooltip.bind(null, "leave")}>
                    <skill.icon data-event="custommouseenter" data-event-off="custommouseleave"data-tip={skill.tooltip} onMouseEnter={handleTooltip.bind(null, "enter")} />
                </Col>
            ))}
        </Row>
    );
}

function Skillset() {
    return [
            <h1 className="project-heading">
                Professional <strong className="purple">Skillset </strong>
            </h1>,
            <SkillsetBuilder list={techstack} />,
            <h1 className="project-heading">
                <strong className="purple">Tools</strong> I use
            </h1>,
            <SkillsetBuilder list={toolstack} />,
            <ReactTooltip effect="solid"/>
    ]
}

export default Skillset;