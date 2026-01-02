import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Homepage from "./pages/homepage";
import './app.css'
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const Projects = lazy(() => import("./pages/projects"));
const Notfound = lazy(() => import("./pages/404"));

function App() {
  return (
      <Routes>
        {/* Home → no Suspense (LCP safe) */}
        <Route path="/" element={<Homepage />} />

        {/* Lazy routes */}
        <Route
          path="/about"
          element={
            <Suspense fallback={null}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="/projects"
          element={
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={null}>
              <Notfound />
            </Suspense>
          }
        />
      </Routes>

  );
}

export default App;
