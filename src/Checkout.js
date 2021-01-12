import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img alt="" src="" />
        <div>
          <h2 className="checkout-title">Your shopping Basket</h2>

          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
