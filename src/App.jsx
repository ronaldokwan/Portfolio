import "bootstrap/dist/css/bootstrap.min.css";
import { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";

import Home from "./components/Home/Home";

// Secondary routes are lazy-loaded so each ships as its own chunk. Home is the
// landing page and holds the LCP element, so it loads eagerly — splitting it
// would add a network round trip before the hero can render.
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        {/* min-height keeps the footer below the fold while a route chunk
            loads, so it doesn't jump down when the page content mounts. */}
        <main style={{ minHeight: "100vh" }}>
          <Suspense fallback={<Preloader load={true} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
