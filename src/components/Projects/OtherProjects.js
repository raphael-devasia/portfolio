import React from "react";
import project1img from "../../assets/Screen Shot 2023-05-17 at 9.08.20 AM.png";
import "./project.css";

const Other = () => {
  return (
    <div className="card-container container">
      <article className="card">
        <div className="thumb">
          <h1 className="project__title">And More..</h1>
          <img src={project1img} alt="about me" className="project__img"></img>

          <h1 className="projectskills__titile">Skills Used:</h1>
          <div className="skill__set">
            <h3 className="project__skills">React</h3>
            <h3 className="project__skills">Node.js</h3>
            <h3 className="project__skills">MongoDB</h3>
          </div>
        </div>
        <div className="infos">
          <h3 className="project__title">See All My Projects</h3>

          <p className="txt">
            I have created 15+ live projects, showcasing my skills in various
            technologies. They are listed in Contentful CMS, forming a
            comprehensive portfolio that demonstrates my growth as a developer.
          </p>

          <div className="project__social">
            <a
              href="https://github.com/raphael-devasia?tab=repositories"
              className="project__social-icon"
              target="_blank"
            >
              <i class="uil uil-globe"></i>
            </a>
            <a
              href="https://github.com/raphael-devasia?tab=repositories"
              className="project__social-icon"
              target="_blank"
            >
              <i class="uil uil-github"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Other;
