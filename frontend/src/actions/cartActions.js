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
                        price: data.image,
                        countInStock: data.countInStock,
                        product: data._id,
                        qty,
                    }
                })
            })
            .catch(error => {
                // store.dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
                console.log(`😱 axios request failed: ${error}`);
            })
        // }
            // localStorage.setItem('cartItems', JSON.stringify(state.cart.))
    }
}
