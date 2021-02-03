import { createSelector } from "reselect";
/*
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};*/

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
/**Data normalization is that you store lists of elements as objects instead of arrays
 * More on Data Normalization https://brainsandbeards.com/blog/advanced-redux-patterns-normalisation
 */
export const selectCollection = (collectionUrlParam) => {
  return createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
};

//Select the specific category of products
/*
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
*/

/**selectCollection function we just wrote is not memoized due to collectionUrlParam being passed
 * in from our collection component's mapStateToProps running whenever our state changes and and
 * calling a new instance of our selectCollection function. In this case collectionUrlParam is a
 * dynamic argument meaning it can change, so to memoize selectCollection we actually have to memoize
 * the whole function using a memoize helper function. We can leverage the lodash library, specifically
 * their memoize helper function by adding it our packages like so: */
