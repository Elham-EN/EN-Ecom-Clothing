import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
// special syntax when importing SVG in React.
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>

      {
        //if current user is an object, it will evaluate to true then it
        //will render a div. If it is false such as null, then rehder the link
        currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )
      }
    </div>
  </div>
);

export default Header;
