import React from 'react'
import "./skills.css"
import FrontEnd from './FrontEnd';
import Backend from './Backend';
import Other from './Other';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container grid">
        <FrontEnd />
        <Other/>
        <Backend></Backend>
        <div className='border'></div>
        
      </div>
    </section>
  );
}

export default Skills