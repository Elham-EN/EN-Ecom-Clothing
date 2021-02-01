/**Root reducer is the actual base reducer object that represents all of the state of our
 * application. So the root reduce will end up being the actual code that combines all of
 * our other states. All the reducers will go here to the root reducer.*/

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//Persist the data
const persistConfig = {
  key: "root", //at what point inside the reducer object want to start storing everyting
  storage,
  whitelist: ["cart"], //is an array containing the string of any reducer that you want to store
};

//return all reducers into one big object & key represent the individual slices of state
const rootReducer = combineReducers({
  user: userReducer, //is handled by firebase authentication
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
