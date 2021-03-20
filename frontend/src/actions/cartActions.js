import axios from "axios"
import store from "../store";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export class CCartActions {

    addToCart(productId, qty) {
        let data = {};

        axios.get(`/api/products/${productId}`)
            .then(response => {
                data = response.data;
                CCartActions.productLoaded = true;
                store.dispatch({
                    type: CART_ADD_ITEM,
                    payload: {
                        name: data.name,
                        image: data.image,
                        price: data.price,
                        countInStock: data.countInStock,
                        product: data._id,
                        qty: qty,
                    }
                })

                const cartItems = store.getState().cart.cartItems
                if (cartItems)
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
            })
            .catch(error => {
                console.error(`😱 axios request failed: ${error}`);
            })
    }

    removeFromCart(productId) {
        store.dispatch({ type: CART_REMOVE_ITEM, payload: productId });
        localStorage.setItem('cartItems', JSON.stringify(store.getState().cart.cartItems));
    }
}