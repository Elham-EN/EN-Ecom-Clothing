import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

//This prop addItem will be dispatch to the store
const CollectionItem = (props) => {
  const { name, price, imageUrl } = props.item;
  //Return JSX
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} to="/productDetails" />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => props.addItem(props.item)} inverted={true}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

/**mapStateToProps is used for selecting the part of the data from the store
 * that the connected component needs. */
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

//connect component take CollectionItem component as argument, and return a new upgraded component.
export default connect(null, mapDispatchToProps)(CollectionItem);
