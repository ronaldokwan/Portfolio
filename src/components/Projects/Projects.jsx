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
              description="A responsive full-stack eCommerce web app with keyword search and filtering, infinite-scroll pagination, and per-user wishlists across 100+ listings, using server-side rendering for fast loads and SEO. Secured with JWT auth, salted bcrypt hashing, and authorisation middleware, deployed on Vercel with an automated CI/CD pipeline and real-time Core Web Vitals analytics."
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
              description="A cross-platform mobile restaurant discovery app featuring location-based search (Google Places API), a ChatGPT AI dining-recommendation chatbot, and a community feed with likes and personalised preferences. Backed by an Express API with token-based auth, Redis caching that cut repeat search times from ~600ms to under 100ms, and Jest tests validating core user flows."
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
              description="A full-stack CRUD note-taking web app with tagging, keyword search, server-side pagination, and archiving. Integrates 4 third-party APIs: the Midtrans payment gateway, Google OAuth sign-in, and 2 RapidAPI services."
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
