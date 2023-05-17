import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/Jay_Dee-removebg-preview.png"
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#">
          <img src={logo} className="nav__logo"></img>
        </a>

        <div className={showMenu ? "show-menu nav__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i class="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i class="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i class="uil uil-scenery nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i class="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close "
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>
        <div class="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i class="uil uil-apps "></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
