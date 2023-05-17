import React from "react";
import Social from "./Social";
import "./home.css";

import Data from "./Data";
import { Scrolldown } from "./Scrolldown";

const Home = () => {
  return (
    <section className="home section " id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div class="home__img"></div>
        
          <Data />
        </div>
      <Scrolldown/>
      </div>
    </section>
  );
};

export default Home;
