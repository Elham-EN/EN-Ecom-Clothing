import React from "react";
import "./checkout-item.styles.scss";

//Access props from checkout page
const CheckoutItem = (props) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={props.cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{props.cartItem.name}</span>
    <span className="quantity">{props.cartItem.quantity}</span>
    <span className="price">{props.cartItem.price}</span>
    <span className="remove-button">&#10005;</span>
  </div>
);

export default CheckoutItem;
