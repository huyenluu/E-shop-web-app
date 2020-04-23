import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.items
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.isHidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    items => items.reduce((sum, item) => sum + item.quantity, 0)
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    items => items.reduce((total, currentItem) => total + currentItem.price*currentItem.quantity, 0)

)
