import React from "react";

import { getDummy } from "./Mockup";
import "./Product.css";

function Product({
  title = "DefaultTitle",
  price = 1,
  rating = 5,
  image = getDummy(300, 200, "fff"),
}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <span>{"⭐".repeat(rating)}</span>
        </div>
      </div>
      <img src={image} alt="Product Image" />
      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
