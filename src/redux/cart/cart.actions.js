import CartActionTypes from "./cart.types";

//payload is optional
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/*Gets the item that we want to add to that array*/
export const addItem = (item) => ({
  //Tell the reducer that it is trying to add this item
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
