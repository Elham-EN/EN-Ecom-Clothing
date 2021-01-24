import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    //This triggered the observer when users were signed in & signed out
    //fetch that current user Auth object who sign in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //when user sign in
      if (userAuth) {
        //To check if the DB has updated at the reference with any new data
        const userRef = await createUserProfileDocument(userAuth);
        //Send snapshot obj representing the data that is currently stored in DB
        //Cloud Firestore sends your listener an initial snapshot of the data,
        //and then another snapshot each time the document changes.
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      //when user sign out and the userAuth object is null
      setCurrentUser(userAuth);
    });
  }

  //called before component is destroy
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              //Check if user is sign in
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

//selecting the part of the data from the store that the connected component needs
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

/**mapDispatchToProps is used for dispatching actions to the store. Which is a function that
 * gets this dispatch property and will return an object whatever prop we want to pass in that
 * dispatches the new action we pass.
 *
 * mapDispatchToProps() is a utility which will help your component to fire an action event
 * (dispatching action which may cause change of application state)
 */
//
const mapDispatchToProps = (dispatch) => ({
  //gets the user object and then call dispatch - an action object to pass to every reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

//dispatching actions to the store.
export default connect(mapStateToProps, mapDispatchToProps)(App);
