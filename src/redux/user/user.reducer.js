/**
 * A reducer is just a function that gets two propertied.
 * State -- parameter
 * It get a state object that represent the last state or the initial state.
 * It is just an object that reprsents what it is that we're trying to store
 *
 * Action -- parameter
 * and receives an action and that action is just an object that a type which
 * is a string value, so it's just the name that tells us what specific action this is.
 *
 * We want to make sure that the reducer is aware of what specific type of action that
 * coming through is and it's gonna based off this type property.
 *
 * The other thing it's going to have have which it might or might not is the payload
 * can be anything is because maybe with this payload object we want to to something with
 * it in order to update our state. We might pass an object that we literally set as the
 * value in our state or we might use this value to make some transformations on state
 **/

//when Action fire the state for the first time, it's going to be null because redux does not
//know that we have any state when the app intitalize. So set an initial state
const INITIAL_STATE = {
  currentUser: null,
};

//Pass default value to state. If state is ever undefined meaning that it's not set then
//it will fall back and leverage this intial state value that we passed. and null is a value.
const userReducer = (state = INITIAL_STATE, action) => {
  // Check to see if the reducer cares about this action
  switch (action.type) {
    // If so, make a copy of `state`
    case "SET_CURRENT_USER":
      return {
        //Return new object that represent the new state user reducer transform into
        ...state,
        currentUser: action.payload,
      };

    default:
      // otherwise return the existing state unchanged
      return state;
  }
};

export default userReducer;
