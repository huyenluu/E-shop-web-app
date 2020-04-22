import {cartActionTypes} from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    isHidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }
        case cartActionTypes.TOOGLE_CART:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state;
    }
}

export default cartReducer;