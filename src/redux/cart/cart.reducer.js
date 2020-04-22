import {cartActionTypes} from './cart.types';

const INITIAL_STATE = {
    currentCart: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                currentCart: [...state.currentCart, action.payload]
            }
        default:
            return state;
    }
}

export default cartReducer;