import {cartActionTypes} from './cart.types';

export const addItemToCart = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
export const toggleCart = {
    type: cartActionTypes.TOOGLE_CART
}
export const removeItem = id => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: id
})
export const decreaseQuantity = id => ({
    type: cartActionTypes.DECREASE_QUANTITY,
    payload: id
})