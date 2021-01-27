import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

/**Hidden value is true because we want to hide the dropdow when the app initialize */
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
//Everytime a Reducer update, it return a new object and mapStateToProps is called
const cartReducer = (state = INITIAL_STATE, action) => {
  console.log("state: ", state);
  console.log("action: ", action);
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden, //switch boolean value
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        /**Have old items and then with the newest action that got fire that trigger add item
         * First spreding in the existing items that is already on the state and add any
         * additonal value at the end*/
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state, //return new state
        cartItems: state.cartItems.filter(
          //Remove from the existing cart array
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
