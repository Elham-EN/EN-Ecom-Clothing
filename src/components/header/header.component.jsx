import React from "react";
//React Redux provides a connect function for you to connect your component to the store.
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { auth } from "../../firebase/firebase.utils";
// special syntax when importing SVG in React.
//import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  LogoHeader,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

//mapStateToProp props into the header component
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <LogoHeader>famazone</LogoHeader>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        <p>SHOP</p>
      </OptionLink>
      <OptionLink to="/shop">
        <p>Contact</p>
      </OptionLink>
      {
        //if current user is an object, it will evaluate to true then it
        //will render a div. If it is false such as null, then rehder the link
        currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            <p>SIGN OUT</p>
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            <p>Sign In</p>
          </OptionLink>
        )
      }
      <CartIcon />
    </OptionsContainer>
    {
      //if hidden is true, then render noting, if false then render the dropdown component
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
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
