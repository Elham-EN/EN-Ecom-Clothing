/**Root reducer is the actual base reducer object that represents all of the state of our
 * application. So the root reduce will end up being the actual code that combines all of
 * our other states. All the reducers will go here to the root reducer.*/

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

//return all reducers into one big object & key represent the individual slices of state
export default combineReducers({
  user: userReducer,
});
