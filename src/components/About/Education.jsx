import Card from "react-bootstrap/Card";
import { staggerContainer, staggerItem, viewportOnce } from "../animations";
import { MotionCol, MotionRow } from "../motionComponents";

const education = [
  {
    degree: "Bachelor of Information Technology",
    school: "University of Technology Sydney (UTS)",
    period: "January 2025 – June 2027",
    points: [
      "Major: Enterprise Software Development",
      "WAM: 88.50 (High Distinction)",
      "UTS Academic Merit International Scholarship recipient",
    ],
  },
  {
    degree: "Full Stack JavaScript Coding Bootcamp",
    school: "Hacktiv8",
    period: "January 2024 – April 2024",
    points: ["Grade: 94.70 / 100 (High Distinction)"],
  },
];

function Education() {
  return (
    <MotionRow
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {education.map((edu, index) => (
        <MotionCol
          md={6}
          className="project-card"
          key={index}
          variants={staggerItem}
        >
          <Card className="project-card-view">
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title style={{ fontSize: "1.4em" }}>
                {edu.degree}
              </Card.Title>
              <Card.Subtitle
                className="mb-2"
                style={{ color: "#c8a2e0", fontStyle: "italic" }}
              >
                <span className="purple">{edu.school}</span>
                <br />
                {edu.period}
              </Card.Subtitle>
              <ul style={{ textAlign: "justify", paddingLeft: "1.2em" }}>
                {edu.points.map((point, i) => (
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

export default Education;
