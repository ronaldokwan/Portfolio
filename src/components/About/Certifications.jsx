import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgWebsite } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";
import { staggerContainer, staggerItem, viewportOnce } from "../animations";
import { MotionCol, MotionRow } from "../motionComponents";

const certifications = [
  {
    title: "Front-End Development",
    issuer: "Meta",
    link: "https://coursera.org/share/1fa4482ef50b4acff187aaaf2d7cbfc9",
  },
  {
    title: "Back-End Development",
    issuer: "Meta",
    link: "https://coursera.org/share/7350c7df189ca1a533bff9f8d651dbef",
  },
];

function Certifications() {
  return (
    <MotionRow
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {certifications.map((cert, index) => (
        <MotionCol
          md={3}
          xs={6}
          className="project-card"
          key={index}
          variants={staggerItem}
        >
          <Card className="project-card-view" style={{ textAlign: "center" }}>
            <Card.Body>
              <FaCertificate
                className="purple"
                style={{ fontSize: "2.5em", marginBottom: "12px" }}
              />
              <Card.Title style={{ fontSize: "1.1em" }}>
                {cert.title}
              </Card.Title>
              <Card.Subtitle
                className="purple mb-3"
                style={{ fontStyle: "italic" }}
              >
                {cert.issuer}
              </Card.Subtitle>
              <Button
                variant="primary"
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                <CgWebsite /> &nbsp;Certificate
              </Button>
            </Card.Body>
          </Card>
        </MotionCol>
      ))}
    </MotionRow>
  );
}

export default Certifications;
