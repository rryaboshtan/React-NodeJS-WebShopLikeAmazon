import axios from "axios";
import {
    PRODUCT_LIST_FAIL, PRODUCT_LIST_LOADING, PRODUCT_LIST_LOADED,
    PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_LOADING, PRODUCT_DETAILS_LOADED
}
    from "../constants/productConstants";
import store from "../store";

export class CProductActions {

    static productsLoaded = false;

    static productsIdsLoaded = [];     // ADD = [] TO THIS LINE IS TRULY FIX THE BUG
    listProducts() {
        if (CProductActions.productsLoaded === false) {
            store.dispatch({ type: PRODUCT_LIST_LOADING });
            axios.get('api/products')
                .then(({ data }) => {
                    store.dispatch({ type: PRODUCT_LIST_LOADED, payload: data.products });
                    CProductActions.productsLoaded = true;
                })
                .catch(error => {
                    store.dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
                    console.log(`😱 Axios request failed: ${error}`);
                })
        }
    }

    ProductDetailsLoad(productId) {
        store.dispatch({ type: PRODUCT_DETAILS_LOADING, payload: productId });

        axios.get('api/products/' + productId)
            .then(response => {
                const data = response.data;
                store.dispatch({ type: PRODUCT_DETAILS_LOADED, payload: data });
            })
            .catch(error => {
                store.dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
                console.log(`😱 Axios request failed: ${error}`);
            })
    }
}






