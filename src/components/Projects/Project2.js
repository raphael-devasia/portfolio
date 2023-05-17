import React from "react";
import project1img from "../../assets/project2.png";
import "./project.css";

const Other = () => {
  return (
    <div className="card-container container">
      <article className="card">
        <div className="thumb">
          <h1 className="project__title">Job Tracker</h1>
          <img src={project1img} alt="about me" className="project__img"></img>

          <h1 className="projectskills__titile">Skills Used:</h1>
          <div className="skill__set">
            <h3 className="project__skills">React</h3>
            <h3 className="project__skills">Node.js</h3>
            <h3 className="project__skills">MongoDB</h3>
          </div>
        </div>
        <div className="infos">
          <h3 className="project__title">Jobster</h3>

          <p className="txt">
            I created a job tracking app using the MERN stack. It simplifies job
            search with application management, interview tracking, and progress
            monitoring, providing a seamless solution for efficient job hunting.
          </p>

          <div className="project__social">
            <a
              href="https://cozy-biscuit-c15612.netlify.app"
              className="project__social-icon"
              target="_blank"
            >
              <i class="uil uil-globe"></i>
            </a>
            <a
              href="https://github.com/raphael-devasia/Jobster"
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
