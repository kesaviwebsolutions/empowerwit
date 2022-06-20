import React from "react";
import About from "../components/pages/About"
import Trainings from "../components/pages/Trainings";
import Partners from "./pages/Partners";
import Roadmap from "./pages/Roadmap";

export default function Bottom() {
  return (
    <div>
      <div id="about-us">
        <About />
      </div>
      <div id="trainings">
        <Trainings />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
    </div>
  );
}
