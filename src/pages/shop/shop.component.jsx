import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

//ShopPage is nested in the route and route automatically passes those three objs
//to the component as a props
const ShopPage = (props) => (
  <div className="shop-page">
    <Route exact path={`${props.match.path}`} component={CollectionsOverview} />
    <Route
      path={`${props.match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;
