import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.styles.scss';
import {removeItem} from '../../redux/cart/cart.action'

const CheckoutItem = ({id, imageUrl, name, price, quantity, removeItem}) => {
    return (
        <tr key = {id} className='checkout-row'>
            <td className='row-block'><img src={imageUrl} alt="product_image"/></td>
            <td className='row-block'>{name}</td>
            <td className='row-block'>{quantity}</td>
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
    removeItem: id => dispatch(removeItem(id))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);