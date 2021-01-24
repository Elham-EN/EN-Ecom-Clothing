import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./index.css";
import App from "./App";

/**
 * Once passed the store object, then we can give that redux store context to the rest of the
 * application so we can dispatch actions to that store or we can pull values of the store and
 * into our components and it all comes with the provider.
 *
 * <Provider store={store}> give our application access to the redux
 */

ReactDOM.render(
  /*make the store available to our app. To do this, we wrap our app with the <Provider />*/
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
