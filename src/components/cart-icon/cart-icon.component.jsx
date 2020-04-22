import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/original.svg';

import './cart-icon.styles.scss';

const CartIcon = ({currentCart}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{currentCart.length}</span>
    </div>
)
const mapStateToProps = state => ({
    currentCart: state.cart.currentCart
})

export default connect(mapStateToProps)(CartIcon);