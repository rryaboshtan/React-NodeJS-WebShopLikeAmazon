import axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";
import store from "../store";

export class CCartActions {

    static productLoaded = false;

    addToCart(productId, qty) {
        let data = {};

        // if (CCartActions.productLoaded === false) {
        axios.get(`/api/products/${productId}`)
            .then(response => {
                data = response.data;
                // console.log('CART ACTIONS DATAAAAAAAA', data)
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

                if (cartItems) {
                    // console.log('CART ACTIONSSSSSSSSSSSSS')
                    localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    localStorage.setItem('my', true)
                }
            })
            .catch(error => {
                console.log(`😱 axios request failed: ${error}`);
            })
        // }
        // console.log('STORE GET STATEEEEEEEEEEEE', store.getState().cartReducer.cartItems)

        // const cartItems = store.getState().cartReducer.cartItems

        // if (cartItems) {
        //     // console.log('CART ACTIONSSSSSSSSSSSSS')
        //     localStorage.setItem('cartItems', JSON.stringify(cartItems))
        //     localStorage.setItem('my', true)
        // }
    }
}
