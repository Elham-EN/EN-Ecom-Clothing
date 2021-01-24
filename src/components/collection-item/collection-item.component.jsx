import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

//This prop addItem will be dispatch to the store
const CollectionItem = ({ item, addItem }) => {
  //console.log("item: ", item);
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <Link className="collection-item2" to="/productDetails">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </Link>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted={true}>
        Add to cart
      </CustomButton>
    </div>
  );
};

/**Whenever there is add item it will get an item in as the property right of this function
 * that will represent the add item prop that gets passed in the component and then we will
 * dispatch our addItem action creator passing in the item in
 */
const mapDispatchToProps = (dispatch) => ({
  //Prop - addItem that will go into Collection component as addItem() function and then whenever
  //dispatch or call this fucntion, this function receive the item as the property pass into addItem()
  //Action creator, which give us back the object where the type is equal to ADD_ITEM and the payload
  //is equal to the item they got pass in (by addItem(item)) and then we will dispatch that new object
  //into the store and it will go through our redux flow.
  addItem: (item) => dispatch(addItem(item)),
});
//Now have access to this addItem dispatch in the props
export default connect(null, mapDispatchToProps)(CollectionItem);
