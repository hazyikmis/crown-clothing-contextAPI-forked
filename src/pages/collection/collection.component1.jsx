//THIS FILES SHOWS US HOW TO USE CONTEXTAPI USAGE METHOD 1
//PLEASE CHECK THE OTHER FILES IN THE SAME DIRECTORY
//SHOWING OTHER METHODS HOW TO USE CONTEXTAPI

import React from "react";
//import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

//import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionsContext from "../../contexts/collections/collections.context";

import "./collection.styles.scss";

//const CollectionPage = ({ collection }) => {
const CollectionPage = ({ match }) => {
  // const { title, items } = collection;
  return (
    <CollectionsContext.Consumer>
      {(collections) => {
        const collection = collections[match.params.collectionId];
        const { title, items } = collection;
        return (
          <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      }}
    </CollectionsContext.Consumer>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   collection: selectCollection(ownProps.match.params.collectionId)(state),
// });

//export default connect(mapStateToProps)(CollectionPage);
export default CollectionPage;
