import React from 'react';
import {connect} from 'react-redux';
import {selectCartItemsCount} from '../../redux/cart/cart.selector'
import {ReactComponent as ShoppingIcon} from '../../assets/original.svg';

import './cart-icon.styles.scss';
import {toggleCart} from '../../redux/cart/cart.action';

const CartIcon = ({itemCount, toggleCart}) => (
    <div className='cart-icon' onClick = {() => toggleCart()}>
        <ShoppingIcon
            className='shopping-icon'
        />
    <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart)
})
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);