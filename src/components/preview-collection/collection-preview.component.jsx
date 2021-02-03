import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

//Parentheses: are used instead of curly brackets after an arrow
//function to return an object.
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 15)
        //want the whole item
        .map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
