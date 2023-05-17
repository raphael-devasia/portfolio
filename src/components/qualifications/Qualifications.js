import React, { useState } from "react";
import "./qualification.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My pathway</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div></div>

        <div className="qualification__section">
          <div
            className={
              toggleState === 1
                ? " qualification__content qualification__content-active "
                : " qualification__content "
            }
          >
            <div className="qualification__data">
              <div className="qualification__sections">
                <h3 className="qualification__title">graphic ahdgahgdhj</h3>
                <span className="qualification__subtitle">spain institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
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
              <div className="qualification__sections">
                <h3 className="qualification__title">hjdasdgahgD</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="qualification__sections">
                <h3 className="qualification__title">HJADASGHDGAGSD</h3>
                <span className="qualification__subtitle">
                  HDKJASDHJKASHDHAKJSDH
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
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
              <div className="qualification__sections">
                <h3 className="qualification__title">4</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? " qualification__content qualification__content-active "
                : " qualification__content "
            }
          >
            <div className="qualification__data">
              <div className="qualification__sections">
                <h3 className="qualification__title">1</h3>
                <span className="qualification__subtitle">spain institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
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
              <div className="qualification__sections">
                <h3 className="qualification__title">2</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="qualification__sections">
                <h3 className="qualification__title">3</h3>
                <span className="qualification__subtitle">
                  HDKJASDHJKASHDHAKJSDH
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
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
              <div className="qualification__sections">
                <h3 className="qualification__title">4</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2011-2013
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
