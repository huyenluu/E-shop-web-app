import {cartActionTypes} from './cart.types';

export const addItemToCart = id => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: id
})