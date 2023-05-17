import React from "react";
import project1img from "../../assets/project1.png";
import "./project.css";

const FrontEnd = () => {
  return (
    <div className="card-container container">
      <article className="card">
        <div className="thumb">
          <h1 className="project__title">E-commerce</h1>
          <img src={project1img} alt="about me" className="project__img"></img>

          <h1 className="projectskills__titile">Skills Used:</h1>
          <div className="skill__set">
            <h3 className="project__skills">React</h3>
            <h3 className="project__skills">React Router</h3>
            <h3 className="project__skills">RestAPI</h3>
          </div>
        </div>
        <div className="infos">
          <h3 className="project__title">Comfy Sloth</h3>

          <p className="txt">
            The e-commerce React project I developed utilizes the Stripe API for
            secure payments and incorporates Auth0 for reliable user
            verification, ensuring a seamless and trustworthy shopping
            experience for customers.
          </p>

          <div className="project__social">
            <a
              href="https://comfysloth4731.netlify.app"
              className="project__social-icon"
              target="_blank"
            >
              <i class="uil uil-globe"></i>
            </a>
            <a
              href="https://github.com/raphael-devasia/Project_comfy_sloth"
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

export default FrontEnd;
