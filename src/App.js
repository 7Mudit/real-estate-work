import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation();
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      // Track pageview with react-ga whenever pathname changes
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
  }
  return (
    <>
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes>
          <Route path="/" key={location.pathname} element={<HomePage />} />
          <Route
            path="/about-us"
            key={location.pathname}
            element={<AboutUs />}
          ></Route>
          <Route
            path="/projects"
            key={location.pathname}
            element={<Projects />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
