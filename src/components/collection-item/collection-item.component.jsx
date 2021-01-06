import React from "react";
import { Link } from "react-router-dom";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <Link className="collection-item2" to="/productDetails">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    </Link>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
