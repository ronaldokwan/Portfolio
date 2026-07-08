import { Container } from "react-bootstrap";
import foodie from "../../Assets/Projects/foodie.webp";
import iceCream from "../../Assets/Projects/ice-cream.webp";
import note from "../../Assets/Projects/note.webp";
import {
  fadeDown,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../animations";
import { Reveal } from "../motion";
import { MotionCol, MotionRow } from "../motionComponents";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Reveal variants={fadeDown}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I&apos;ve worked on recently.
          </p>
        </Reveal>
        <MotionRow
          style={{ justifyContent: "center", paddingBottom: "10px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <MotionCol md={4} className="project-card" variants={staggerItem}>
            <ProjectCard
              imgPath={iceCream}
              imgWidth={800}
              imgHeight={677}
              isBlog={false}
              title="Ice Cream eCommerce"
              description="A full-stack eCommerce web app featuring product browsing, search filtering, infinite-scroll browsing, and a personalised wishlist across 100+ product listings. Secured with JWT auth, bcrypt hashing, and Zod-validated REST APIs, shipped to production on Vercel."
              techStack="Next.js, TypeScript, MongoDB, Tailwind CSS"
              ghLink="https://github.com/ronaldokwan/Ice-Cream"
              // demoLink="https://new-next-gray.vercel.app/"
            />
          </MotionCol>
          <MotionCol md={4} className="project-card" variants={staggerItem}>
            <ProjectCard
              imgPath={foodie}
              imgWidth={800}
              imgHeight={1415}
              isBlog={false}
              title="Foodie Finder"
              description="A cross-platform restaurant discovery platform featuring Google Places API for location-based search, an AI dining recommendation chatbot, and a community feed, backed by a secure REST API with 18+ endpoints, JWT auth, Redis caching, and Jest tests."
              techStack="React Native, Expo, Express, MongoDB, Redis, Jest"
              ghLink="https://github.com/ronaldokwan/Foodie-Finder"
            />
          </MotionCol>
          <MotionCol md={4} className="project-card" variants={staggerItem}>
            <ProjectCard
              imgPath={note}
              imgWidth={581}
              imgHeight={877}
              isBlog={false}
              title="Note Taking App"
              description="A full-stack note-taking web app with full CRUD management, tagging, search, pagination, and archiving. Integrates 4 third-party APIs (Google OAuth/JWT, Midtrans payments, and 2 RapidAPI services), tested with Jest and Supertest and deployed on Firebase Hosting."
              techStack="React, Redux, Express, Sequelize, PostgreSQL, Bootstrap"
              ghLink="https://github.com/ronaldokwan/Note-Taking-App"
            />
          </MotionCol>{" "}
        </MotionRow>
      </Container>
    </Container>
  );
}

export default Projects;
