import React from "react";
import {connect} from 'react-redux';

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import {addItemToCart} from '../../redux/cart/cart.action'

const CollectionItem = ({ id, name, price, imageUrl, addItemToCart }) => (
    <div className="collection-item">
        <div
            className="image item-container"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <div className='add-btn'>
                <CustomButton onClick={() => addItemToCart(id)}>Add to cart</CustomButton>
            </div>
        </div>
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: id => dispatch(addItemToCart(id))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
