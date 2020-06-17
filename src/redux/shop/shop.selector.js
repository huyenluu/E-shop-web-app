import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectColections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectColections],
    collections => Object.keys(collections).map(
        key => collections[key]
    )
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectColections],
    collections => collections[collectionUrlParam]
)