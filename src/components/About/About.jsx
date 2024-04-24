import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import laptopImg from "../../Assets/about.png";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Cloudstack from "./CloudStack";
import DatabaseStack from "./DatabaseStack";
import FrameworkStack from "./FrameworkStack";
import LanguageStack from "./LanguageStack";
import ToolStack from "./ToolStack";
function About() {
  const { ref: languageRef, inView: language } = useInView();

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I&apos;M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <div
          className={`${
            language
              ? "animate__animated animate__fadeInLeft"
              : "animate__animated animate__fadeOut"
          }`}
          ref={languageRef}
        >
          <h1 className="project-heading">
            <strong className="purple">Programming Languages</strong>
          </h1>

          <LanguageStack />
        </div>
        <div className="animate__animated animate__FadeInLeft animate__delay-1s">
          <h1 className="project-heading">
            <strong className="purple">Databases</strong>
          </h1>

          <DatabaseStack />
        </div>
        <h1 className="project-heading">
          <strong className="purple">Libraries/Frameworks</strong>
        </h1>
        <FrameworkStack />

        <h1 className="project-heading">
          <strong className="purple">Cloud Computing</strong>
        </h1>
        <Cloudstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong>
        </h1>
        <ToolStack />
      </Container>
    </Container>
  );
}

export default About;
