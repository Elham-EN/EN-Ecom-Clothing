import React from "react";
import { Link } from "react-router-dom";
//React Redux provides a connect function for you to connect your component to the store.
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";
// special syntax when importing SVG in React.
//import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//mapStateToProp props into the header component
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <h1 className="header-h1">famazone</h1>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        <p>SHOP</p>
      </Link>
      <Link className="option" to="/shop">
        <p>Contact</p>
      </Link>

      {
        //if current user is an object, it will evaluate to true then it
        //will render a div. If it is false such as null, then rehder the link
        currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <p>SIGN OUT</p>
          </div>
        ) : (
          <Link className="option" to="/signin">
            <p>Sign In</p>
          </Link>
        )
      }
      <CartIcon />
    </div>
    {
      //if hidden is true, then render noting, if false then render the dropdown component
      hidden ? null : <CartDropdown />
    }
  </div>
);

/**
 *This mapStateToProps and this connect we will use anywhere we need properties from
  our reducer. https://react-redux.js.org/using-react-redux/connect-mapstate
  Each field in the object will become a prop for your actual component
 */

/*Fucntion that allow us to access the state. With the state being our root reducer. 
  First arg is entire Redux store state. mapStateToProps function should return a plain 
  object that contains the data the component needs:
  Using Advance destructure - { user: { currentUser }, cart: { hidden } }*/
const mapStateToProp = (state) =>
  /**Takes an object whose properties are input-selectors*/
  createStructuredSelector({
    //Get current user value from user reduce through root reducer
    //currentUser: state.user.currentUser,
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

//React Redux provides a connect function for you to connect your component to the store.
//Now the header component to receive the current user value from the reducer
//mapStateToProps is used for selecting the part of the data from the store that the
//connected component needs. This is also called Higher Order Component
export default connect(mapStateToProp)(Header);
