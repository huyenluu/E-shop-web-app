import {cartActionTypes} from './cart.types';

export const addItemToCart = id => ({
    type: cartActionTypes.ADD_ITEM,
    payload: id
})
export const toggleCart = {
    type: cartActionTypes.TOOGLE_CART
}
export const removeItem = id => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: id
})