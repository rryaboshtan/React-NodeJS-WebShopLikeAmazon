import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            console.log('CART ITEMSSSSSSSSSSSSSSSSSSSSSSS', state.cartItems);
            if (existItem)
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x
                    ,)
                }
            else
                return { ...state, cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            console.log('ACTION PAYLOADDDDDDDDDDDDDDD', action.payload);
            console.log('ACTION ARRAY', [1, 2, 3, 4, 5].filter(x => x !== 3));
            console.log('STATE FILTER RRRRRRRRRRRRRRRRR', state.cartItems.filter(x => x.product !== action.payload))
            return { ...state, cartItems: state.cartItems.filter(x => x.product !== action.payload)}
        default:
            return state;
    }
}