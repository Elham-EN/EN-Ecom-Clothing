import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = (props) => {
  console.log(props.collection);
  return (
    <div className="collection-page">
      <h2>Collection PAGE</h2>
    </div>
  );
};

//ownProps - give the props of the component
const mapStateToProps = (state, ownProps) => ({
  //This is necessary because unlike other selectors, this selector needs a part
  //of the state depending on the URL parameter
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
