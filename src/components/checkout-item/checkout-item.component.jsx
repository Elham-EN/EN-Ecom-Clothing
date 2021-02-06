import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

//Access props from checkout page
const CheckoutItem = (props) => (
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={props.cartItem.imageUrl} alt="item" />
    </ImageContainer>
    <TextContainer>{props.cartItem.name}</TextContainer>
    <QuantityContainer>
      <div onClick={() => props.removeItem(props.cartItem)}>&#10094;</div>
      <span>{props.cartItem.quantity}</span>
      <div onClick={() => props.addItem(props.cartItem)}>&#10095;</div>
    </QuantityContainer>
    <TextContainer>{props.cartItem.price}</TextContainer>
    <RemoveButtonContainer onClick={() => props.clearItem(props.cartItem)}>
      &#10005;
    </RemoveButtonContainer>
  </CheckoutItemContainer>
);

/**Responsible for enabling a component to dispatch actions. React component above,
 * the onClick function is assigned to an action dispatcher by the container.  */
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

/**The arguments passed to connect are use to configure how container communicate with the store.
 * Both Args designed to gather props from the store and pass them to the child component */
export default connect(null, mapDispatchToProps)(CheckoutItem);
