export const addItemToCart = (itemsState, itemToAdd) => {

    const isIdExistInCart = itemsState.find(item => item.id === itemToAdd.id)

    if(isIdExistInCart) {
        const newArray = itemsState.map( item => {

            if(item.id === itemToAdd.id) {
                return {...item, quantity: item.quantity + 1 }
            }
            return item
        })
        console.log(newArray)
        return newArray
    } else {
        return [...itemsState, {...itemToAdd, quantity: 1}]
    }

}
export const removeItemFromCard = (itemsState, id) => {

    return itemsState.filter( item => item.id !== id)

}