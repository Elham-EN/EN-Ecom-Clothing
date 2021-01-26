import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

//MapdispatchToProps() will give us a prop
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

//And take that prop as object property and dispatch to the store through reducer
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

/**
 * For better performance - if cart item values don't change, should not
 * re-render the component. This is called memorization which is the caching
 * of the selectors value. Use releselect - will allow us to memoize and not
 * re-render a component if the state value does not change.
 */

//Pull the state in and get the value & add them all togather to get the total
//Using reduce() function to bring down to one final value
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
