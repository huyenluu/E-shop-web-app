export const totalItems = (itemsState) => {

    return itemsState.reduce((sum, item) => sum + item.quantity)

}