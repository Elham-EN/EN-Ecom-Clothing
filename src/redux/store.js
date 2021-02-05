/**
 * Add middleware to our store so that whenever actions get fired or dispatched we can
 * catch them and then display them. Middleware which is a piece in the between our action
 * firing and our root reducer are just function that receive actions in and then do something
 * with them and then pass them out to the root reduces
 */

import { createStore, applyMiddleware } from "redux";

import { logger } from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

//SET UP THE MIDDLEWARE
//The middleware is that the store is expecting from redux is an array.
const middleware = [];

//If this is development mode then push logger into middleware
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

//The Redux store brings together the state, actions, and reducers that make up your app.
//Creates a Redux store that holds the complete state tree of your app. A reducing function
//that returns the next state tree, given the current state tree and an action to handle.

/**When actions come through being dispatched by your action creators, they hit the reducer and
 * update the reducer but along the way they also pass through any middleware that we apply through
 * thus applyMiddleware() call and all middlewares are essentially these function that you can catch write
 * that catch actions and do something and then return the action so it continues down and update the reducer.
 *
 * Logger catches the action and then logs it to me as as logging what the state was befero the actions update
 * the reducer and as well as what the state wull be after they update the reducer.
 */
const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store, persistor };
