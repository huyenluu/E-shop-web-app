import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.styles.scss';
import {removeItem, addItemToCart, decreaseQuantity} from '../../redux/cart/cart.action'

const CheckoutItem = ({item, removeItem, decreaseQuantity, addItemToCart}) => {
    const {id, imageUrl, name, price, quantity} = item
    return (
        <tr className='checkout-row'>
            <td className='row-block'><img src={imageUrl} alt="product_image"/></td>
            <td className='row-block'>{name}</td>
            <td className='row-block quantity'>
                <span
                    className= 'arrow'
                    onClick= {() => decreaseQuantity(id)}
                >&#10094;</span>
                <span className='value'>{quantity}</span>
                <span
                    className='arrow'
                    onClick= {() => addItemToCart(item)}
                >&#10095;</span>
            </td>
            <td className='row-block'>${price}</td>
            <td
                className='row-block remove-button'
                onClick = {() => removeItem(id)}
            >
                &#10005;
            </td>
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    decreaseQuantity: id => dispatch(decreaseQuantity(id))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);