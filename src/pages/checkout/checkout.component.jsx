import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

//Got the cartItem and total props from mapStateToProps()
const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => {
      //Pass in the props data to checkoutItem component
      return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
    })}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      <p>4242 4242 4242 4242 - Exp: 01/20[add future date] - CVV: 123</p>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

/**To cut down on boilerplate. createStructuredSelector() is most helpful
 * to use in components that are pulling in a number of selectors.
 * mapStateToProps, as it’s only responsible for retrieving data from the store. */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

//a higher-order component is a function that takes (wraps) a component and returns a new component.
export default connect(mapStateToProps)(CheckoutPage);
