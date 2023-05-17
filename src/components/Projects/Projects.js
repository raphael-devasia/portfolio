import React from "react";
import "./project.css";
import FrontEnd from "./Project1";
import Backend from "./OtherProjects";
import Other from "./Project2";

const Projects = () => {
  return (
    <section className="skills section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container grid">
        <FrontEnd />
        <Other />
        <Backend></Backend>
        <div className="border"></div>
      </div>
    </section>
  );
};

export default Projects;
