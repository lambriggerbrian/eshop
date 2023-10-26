import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { getDummy } from "./Mockup";

import "./Checkout.css";

const DUMMY_BASKET = [
  { id: 1, title: "Different Title", rating: 3, price: 2.15 },
  { id: 2, title: "Another Title", rating: 5, price: 3.99 },
];

function cartSum(accumulator, item) {
  return accumulator + item.price;
}

function Checkout({ items = DUMMY_BASKET }) {
  console.log(items);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src={getDummy(800, 150, "fff")}
          alt="Checkout Ad"
          className="checkout__ad"
        />
        <h2>Your Shopping Basket</h2>
        <div className="checkout__products">
          {items.map((item) => (
            <CheckoutProduct
              key={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Card className="checkout__total">
          <span>
            Subtotal ({items.length} items): <small>$</small>
            <strong>{items.reduce(cartSum, 0).toFixed(2)}</strong>
          </span>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="This order is a gift"
            />
            <FormControlLabel
              control={
                <Button variant="contained" className="checkout__button">
                  Proceed to Checkout
                </Button>
              }
            ></FormControlLabel>
          </FormGroup>
        </Card>
      </div>
    </div>
  );
}

export default Checkout;
