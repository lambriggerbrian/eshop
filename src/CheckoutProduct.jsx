import React from "react";
import { getDummy } from "./Mockup";

import { Button, Card } from "@mui/material";
import "./CheckoutProduct.css";

function CheckoutProduct({
  title = "DefaultTitle",
  price = 1,
  rating = 5,
  image = getDummy(300, 200, "fff"),
}) {
  return (
    <Card sx={{ margin: "10px" }}>
      <div className="checkoutProduct">
        <img src={image} alt="Product Image" />
        <div className="checkoutProduct__info">
          <strong>{title}</strong>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            <span>{"⭐".repeat(rating)}</span>
          </div>
          <Button variant="contained" size="small" disableElevation>
            Remove From Basket
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CheckoutProduct;
