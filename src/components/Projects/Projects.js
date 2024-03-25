import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import weather from "../../Assets/Projects/weather.png";
import todolist from "../../Assets/Projects/todolist.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import java from "../../Assets/Projects/java.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Automatica Technologies"
              description="An e-commerce website of Automatica technologies. It is made using HTML, CSS, and JQuery in frontend and wordpress is used as CMS(Content Management System) for the website."
              ghLink="https://github.com/Chiwawa-Inc/CMS-ecommerce"
              demoLink="https://dev.autotechpl.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={java}
              isBlog={false}
              title="Course Management System"
              description="A course management system for teacher and student made with java swing that includes enrolling in courses and modules, see their results and manage their personal information."
              ghLink="https://github.com/anjinashahi/CMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather app"
              description="This website shows the current weather conditions such as current temperature, humidity, maximum and minimum temperature, and wind speed. The user can also browse their city. It is made using HTML, CSS, Javascript, MySql, php and external API used to fetch data."
              ghLink="https://github.com/anjinashahi/weatherapp"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To Do List"
              description="A to-do list that allows users to create a task and tick off completed tasks and delete items. React, CSS and Vite was used to make is to-do list."
              ghLink="https://github.com/anjinashahi/todolist_react"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A game of TicTacToe made in python which is played on the command line interface."
              ghLink="https://github.com/anjinashahi/Tic-tac-toe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
