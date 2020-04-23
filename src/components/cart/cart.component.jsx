import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selector'
import CustomButton from '../custom-button/custom-button.component';


import './cart.styles.scss';

const Cart = ({ items }) => {

    if (items.length === 0) {
        return (
            <div className='cart-holder'>
                Your shopping bag is empty
            </div>
        )
    }
    return (
        <div className='cart-holder'>
            <div className='cart-items-holder'>
                {
                    items.map(item => (
                        <div key={item.id} className='cart-item'>
                            <div className='image-holder'>
                                <img src={item.imageUrl} alt='product_image' />
                            </div>
                            <div>
                                <div>{item.name}</div>
                                <div>{item.quantity} x $ {item.price}</div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isHidden: selectCartHidden,
    items: selectCartItems
})
export default connect(mapStateToProps)(Cart);