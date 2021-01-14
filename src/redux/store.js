/**
 * Add middleware to our store so that whenever actions get fired or dispatched we can
 * catch them and then display them. Middleware which is a piece in the between our action
 * firing and our root reducer are just function that receive actions in and then do something
 * with them and then pass them out to the root reduces
 */

import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./root-reducer";

//SET UP THE MIDDLEWARE
//The middleware is that the store is expecting from redux is an array.
const middleware = [logger];

//This fucntion that get both root reducer and also return value of applyMiddleware
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
