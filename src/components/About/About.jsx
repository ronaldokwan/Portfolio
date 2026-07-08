import { Col, Container, Row } from "react-bootstrap";
import laptopImg from "../../Assets/about.png";
import { fadeDown, fadeLeft, fadeRight, viewportOnce } from "../animations";
import { Reveal } from "../motion";
import { MotionCol } from "../motionComponents";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import { cloud, databases, frameworks, languages, tools } from "./stacks";
import TechStack from "./TechStack";

const techSections = [
  { title: "Programming Languages", icons: languages },
  { title: "Databases", icons: databases },
  { title: "Libraries/Frameworks", icons: frameworks },
  { title: "Cloud Computing", icons: cloud },
  { title: "Tools", icons: tools },
];

function About() {
  return (
    <Container fluid className="about-section" style={{ overflow: "hidden" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Reveal variants={fadeDown}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I&apos;M</strong>
              </h1>
            </Reveal>
            <AboutCard />
          </Col>
          <MotionCol
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </MotionCol>
        </Row>

        <Reveal variants={fadeLeft}>
          <h1 className="project-heading">
            Work <strong className="purple">Experience</strong>
          </h1>
          <Experience />
        </Reveal>

        <Reveal variants={fadeRight}>
          <h1 className="project-heading">
            <strong className="purple">Education</strong>
          </h1>
          <Education />
        </Reveal>

        {techSections.map(({ title, icons }, index) => (
          <Reveal key={title} variants={index % 2 === 0 ? fadeLeft : fadeRight}>
            <h1 className="project-heading">
              <strong className="purple">{title}</strong>
            </h1>
            <TechStack icons={icons} />
          </Reveal>
        ))}

        <Reveal variants={fadeRight}>
          <h1 className="project-heading">
            <strong className="purple">Certifications</strong>
          </h1>
          <Certifications />
        </Reveal>
      </Container>
    </Container>
  );
}

export default About;
