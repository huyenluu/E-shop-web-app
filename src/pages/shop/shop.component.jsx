import React from "react";
import {connect} from 'react-redux';

import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component {

    render() {
        const { collections } = this.props;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    collections: state.shop.collections
})

export default connect(mapStateToProps)(ShopPage);
