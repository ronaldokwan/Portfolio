import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
    threshold: 0.5, // Adjust this value to control when the animation should trigger
  });

  return (
    <section>
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I&apos;M <strong className="main-name"> RONALDO KWAN</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div
        className={`${
          inView ? "animate__animated animate__fadeIn animate__delay-1s" : ""
        }`}
        ref={ref}
      >
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
