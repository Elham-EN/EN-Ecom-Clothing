import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
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
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
        //when user sign out and the userAuth object is null
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  //called before component is destroy
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
