import React from "react";
import { Link } from "react-router-dom";


const Data = () => {
  return (
    <div className="home__data">
      <h1 class="home__title">Jino Devasia</h1>
      <h3 class="home__subtitle">I am a full stack devoloper.</h3>
      <p class="home__description">
        "I'm a passionate and dedicated Full Stack Developer with a focus on
        crafting innovative and engaging digital experiences that make a lasting
        impact."
      </p>
      <a href="#contact" class="button button--flex">
        Say Hello <i class="uil uil-message "></i>
      </a>
     
    </div>
  );
};

export default Data;
