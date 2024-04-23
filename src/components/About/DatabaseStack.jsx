import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql, SiRedis } from "react-icons/si";

function Databasestack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
    </Row>
  );
}

export default Databasestack;