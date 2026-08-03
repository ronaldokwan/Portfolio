import Card from "react-bootstrap/Card";
import { staggerContainer, staggerItem, viewportOnce } from "../animations";
import { MotionCol, MotionRow } from "../motionComponents";

const experiences = [
  {
    role: "Software Engineer",
    company: "PT Dana Purna Investama",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    period: "June 2024 – January 2025",
    points: [
      "Built and maintained 5+ production web applications serving 1,000+ active users, owning features across the full lifecycle from design through deployment with Laravel, CodeIgniter, PHP, JavaScript, and MySQL.",
      "Designed and implemented RESTful APIs and MySQL database schemas to power core product features, collaborating closely with a 6-person cross-functional team (Project Lead, 4 Developers, Quality Assurance).",
      "Implemented OAuth 2.0 integration, establishing robust, secure authentication protocols, centralised token management, and standardised data exchange between internal systems and external third-party providers.",
      "Migrated deprecated Google APIs to current versions ahead of end-of-life deadlines, refactoring legacy integration code across applications, cutting API response times by 15% and preventing service disruptions.",
    ],
  },
];

function Experience() {
  return (
    <MotionRow
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {experiences.map((exp, index) => (
        <MotionCol
          md={6}
          className="project-card"
          key={index}
          variants={staggerItem}
        >
          <Card className="project-card-view">
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title style={{ fontSize: "1.4em" }}>
                {exp.role}{" "}
                <span className="purple">@ {exp.company}</span>
              </Card.Title>
              <Card.Subtitle
                className="mb-2"
                style={{ color: "#c8a2e0", fontStyle: "italic" }}
              >
                {exp.type} · {exp.location}
                <br />
                {exp.period}
              </Card.Subtitle>
              <ul style={{ textAlign: "justify", paddingLeft: "1.2em" }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </MotionCol>
      ))}
    </MotionRow>
  );
}

export default Experience;
