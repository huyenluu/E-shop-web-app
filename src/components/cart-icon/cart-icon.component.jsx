import React from 'react';
import {connect} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/original.svg';

import './cart-icon.styles.scss';
import {toggleCart} from '../../redux/cart/cart.action';

const CartIcon = ({items, toggleCart}) => (
    <div className='cart-icon' onClick = {() => toggleCart()}>
        <ShoppingIcon
            className='shopping-icon'
        />
    <span className='item-count'>
        {items.length === 0 ? 0 : items.reduce((sum, item) => sum + item.quantity, 0)}
    </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart)
})
const mapStateToProps = state => ({
    items: state.cart.items
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);