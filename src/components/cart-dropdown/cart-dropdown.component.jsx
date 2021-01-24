import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

//Destructure the Props
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => {
        //console.log("CartItem: ", cartItem);
        return <CartItem key={cartItem.id} item={cartItem} />;
      })}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

//Need access to those cart items from redux store & destructure state & return
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

//Acess Redux Store that this component needs
export default connect(mapStateToProps)(CartDropdown);
