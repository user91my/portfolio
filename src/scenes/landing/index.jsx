import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./home";
import Skills from "./skills";
import Projects from "./projects";
import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";

// Number of years elapsed
// const startTime = new Date(2021, 11); // Year, Month (Dec'2021) - started coding
// const presentTime = new Date();
// const timeElapsed = presentTime - startTime;
// const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365.25;
// const numberOfYears = timeElapsed / millisecondsInAYear; // eslint-disable-line

const Landing = () => {
  //
  // "useLocation" returns the current location object.
  // The current location object contains properties like :-
  //    'pathname' - access the current URL's path
  //    'search' - access query parameters
  //    'hash' - access hash fragment
  const location = useLocation();

  // Controller to scroll to specific hash section within the
  // landing page
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default Landing;
