import React from "react";
import Product from "./Product";
import { getDummy } from "./Mockup";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src={getDummy(800, 300, "eee")}
            alt="Home hero image"
            className="home__image"
          />
          <div className="home__row">
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>
          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
