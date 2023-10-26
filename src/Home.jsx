import React from "react";
import { getDummy } from "./Mockup";
import Product from "./Product";

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
            <Product title="Different Title" rating={3} />
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
