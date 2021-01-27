/**
 * Selectors can compute derived data, allowing Redux to store the minimal possible state.
 * Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
 * Selectors are composable. They can be used as input to other selectors.
 * https://www.npmjs.com/package/reselect#motivation-for-memoized-selectors
 */
import { createSelector } from "reselect";

//A function that gets the whole state and just return a slice of it. Gets the whole
//reducer state and want the cart piece of the state only using this input selector
//of selectCart
const selectCart = (state) => state.cart;

//selectCartItems is a property in my cart & createSelector() take two args. The first
//args is a collection - an array of of input selectors & second arg is a func that will
//return the value we want out of the selector & the params is each output of input
//selectors in the array
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((addAllQty, cartItem) => {
      //It will collect all the num value of the Qtys on all the cart items
      return addAllQty + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((addAllQty, cartItem) => {
    //It will collect all the num value of the Qtys on all the cart items
    return addAllQty + cartItem.quantity * cartItem.price;
  }, 0)
);
