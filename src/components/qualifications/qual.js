import React from "react";
import "./qualification.css";

const Qualifications = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>;
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__section">
          <div className=" qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">web design</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021-present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">spain institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021-present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">spain institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021-present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">spain institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021-present
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"></h3>
                <span className="qualification__subtitle">spain institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021-present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
