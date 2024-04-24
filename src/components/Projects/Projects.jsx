import { Col, Container, Row } from "react-bootstrap";
import image from "../../Assets/Projects/1.jpg";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Note Taking App"
              description="A note-taking web application that allows users to create, edit, and manage their notes in a digital format, accessible through a web browser."
              techStack="React, Redux, Bootstrap, Express, Sequelize, PostgreSQL, "
              ghLink="https://github.com/ronaldokwan/Note-Taking-App"
              demoLink="https://github.com/ronaldokwan/Note-Taking-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Ice Cream Shop"
              description="An e-commerce shop that allows customers to browse and purchase ice cream online"
              techStack="NextJs, Typescript, Tailwind, MongoDB"
              ghLink="https://github.com/ronaldokwan/Ice-Cream"
              demoLink="https://github.com/ronaldokwan/Ice-Cream"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Social media App"
              description="A mobile based social media app that allows users to upload photos and videos, follow other users, and like and comment on posts."
              techStack="React Native, Expo, GraphQL, MongoDB, Redis"
              ghLink="https://github.com/ronaldokwan/Youtube-Mobile"
              demoLink="https://github.com/ronaldokwan/Youtube-Mobile"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
