/**
 * Add Firebase SDKs and initialize Firebase
 */

//the core Firebase SDK
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/firestore";
import "firebase/auth";

/**
 * how firebase knows that your application is connected
 * to your firebase account and database!
 */
//app's Firebase project configuration
const config = {
  apiKey: "AIzaSyBBtkn_5TbasgD6GUzgvMJQKnEf8wBCOWY",
  authDomain: "ecom-clothing-en.firebaseapp.com",
  projectId: "ecom-clothing-en",
  storageBucket: "ecom-clothing-en.appspot.com",
  messagingSenderId: "126973949776",
  appId: "1:126973949776:web:b8c8f569c51db4745fde55",
  measurementId: "G-7THZ2V8R8Z",
};

//take userAuth object from the authentication library and store inside the DB
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth object does not exist then exit from this function
  //this is in the case of when user sign out and return null object
  if (!userAuth) return;
  //if it does exist, then query inside the firestore for the document to see if
  //it already exist.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //to determine whether or not there's any data in the current reference in firestore
  // immutable copy of the data at a Database location.
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    //create new data
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //Create new user data
    try {
      await userRef.set({
        displayName: displayName,
        email: email,
        createdAt: createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

//Initialize Firebase in your app
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//setup GOOGLE authentication utility - Authenticate Using Google Sign-In
//Represents the Google Sign-In authentication provider.
var provider = new firebase.auth.GoogleAuthProvider();

//Specify additional custom OAuth provider parameters that you want to
//send with the OAuth(Open Authorization) request
provider.setCustomParameters({
  prompt: "select_account",
});

/**Authenticate with Firebase using the Google provider object. You can
 * prompt your users to sign in with their Google Accounts either by
 * opening a pop-up window or by redirecting to the sign-in page. */
export const signInWithGoogle = () => auth.signInWithPopup(provider);
