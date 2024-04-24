import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const { ref: topSectionRef, inView: topSectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const { ref: home2Ref, inView: home2InView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <div
          className={`${
            topSectionInView
              ? "animate__animated animate__fadeIn"
              : "animate__animated animate__fadeOut"
          }`}
          ref={topSectionRef}
        >
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
        </div>
      </Container>
      <div
        className={`${
          home2InView
            ? "animate__animated animate__fadeIn"
            : "animate__animated animate__fadeOut"
        }`}
        ref={home2Ref}
      >
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
