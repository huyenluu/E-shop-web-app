import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectColections = createSelector(
    [selectShop],
    shop => shop.collections
)