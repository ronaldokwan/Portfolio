import { Col, Row } from "react-bootstrap";

function TechStack({ icons }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map(({ Icon, label }) => (
        <Col key={label} xs={4} md={2} className="tech-icons">
          <Icon title={label} aria-label={label} />
        </Col>
      ))}
    </Row>
  );
}

export default TechStack;
