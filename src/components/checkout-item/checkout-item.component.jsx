import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

//Access props from checkout page
const CheckoutItem = (props) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={props.cartItem.imageUrl} alt="item" />
    </div>
    <span className="name">{props.cartItem.name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => props.removeItem(props.cartItem)}>
        &#10094;
      </div>
      <span className="value">{props.cartItem.quantity}</span>
      <div className="arrow" onClick={() => props.addItem(props.cartItem)}>
        &#10095;
      </div>
    </span>
    <span className="price">{props.cartItem.price}</span>
    <span
      className="remove-button"
      onClick={() => props.clearItem(props.cartItem)}
    >
      &#10005;
    </span>
  </div>
);
/**function that maps the dispatch function and returns an object of functions, which will be merged
 * into the existing props and made available to your component as additional ones. It’s very similar
 * to mapStateToProps, which maps the state to props for your component, but then for the dispatch
 * function and the values of the return object have to be functions */

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
