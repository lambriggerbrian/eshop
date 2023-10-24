import React from "react";

import "./Product.css";
import { getDummy } from "./Mockup";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Title</p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__rating">⭐⭐⭐⭐⭐</div>
      </div>
      <img src={getDummy(300, 200, "fff")} alt="Product Image" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
