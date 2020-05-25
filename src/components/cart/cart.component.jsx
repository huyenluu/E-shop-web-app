import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selector';
import {toggleCart} from '../../redux/cart/cart.action'
import CustomButton from '../custom-button/custom-button.component';


import './cart.styles.scss';

const Cart = ({ items, dispatch }) =>
    items.length
    ? (
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

            <Link to='/checkout'>
                <CustomButton onClick = {() => dispatch(toggleCart)}>Go to checkout</CustomButton>
            </Link>
        </div>
    )
    : (
        <div className='cart-holder'>
            Your shopping bag is empty
        </div>
    )
;

const mapStateToProps = createStructuredSelector({
    isHidden: selectCartHidden,
    items: selectCartItems
})
export default connect(mapStateToProps)(Cart);