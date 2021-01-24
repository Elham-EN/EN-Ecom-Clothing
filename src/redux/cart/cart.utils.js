/**The first parameter is the existing cart items that are in the cart array and
 * second parameter is going to be the car item that we want to add
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //look inside the existing carItems to if that cart item alread exists. if find() is
  //true then it will return the first item found in the array based on the condition
  const existingCartItem = cartItems.find(
    //if it matches, it will set that cart item where the condition is true to the
    //const var. If it doesn't find anything after looping through all of it, it
    //will be undefined.
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  //If existing cart item exist then return a new array
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? //if true then crate a new object. If does not match then return the original cart item
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //If the cart item not found inside of the array, then return a new array with
  //all the existing cart items that were already there
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
