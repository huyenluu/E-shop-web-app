import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';


import './cart.styles.scss';

const Cart = ({ isHidden, items }) => {

    if(items.length === 0 ) {
        return (
            <div className= {isHidden ? 'hide-cart' : 'cart-holder'}>
                Your shopping bag is empty
            </div>
        )
    }
    return (
        <div className= {isHidden ? 'hide-cart' : 'cart-holder'}>
            {
                items.map(item => (
                    <div key = {item.id} className= 'cart-item-holder'>
                        <div className='image-holder'>
                            <img src={item.imageUrl} alt = 'product_image'/>
                        </div>
                        <div>
                            <div>{item.name}</div>
                            <div>{item.quantity} x $ {item.price}</div>
                        </div>
                    </div>
                ))
            }
            <CustomButton>Go to checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = state => ({
    isHidden: state.cart.isHidden,
    items: state.cart.items
})
export default connect(mapStateToProps)(Cart);