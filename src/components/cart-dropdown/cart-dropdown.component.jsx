import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

//Destructure the Props
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => {
          //console.log("CartItem: ", cartItem);
          return <CartItem key={cartItem.id} item={cartItem} />;
        })
      ) : (
        <span className="empty-message">Your cart is empty </span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  </div>
);

//history.push() it redirects and adds the page to the browser history.

//Need access to those cart items from redux store & destructure state & return
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

/**get access to the history object’s properties and the closest <Route>'s match via
 * the withRouter() higher-order component.
 *
 * withRouter() will pass updated match, location,
 * and history props to the wrapped component whenever it renders.
 *
 * We want what comes out of connect() component to receive those props */

//Acess Redux Store that this component needs
export default withRouter(connect(mapStateToProps)(CartDropdown));
