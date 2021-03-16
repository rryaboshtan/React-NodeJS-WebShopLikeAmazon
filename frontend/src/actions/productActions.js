import axios from "axios";
import {
    PRODUCT_LIST_FAIL, PRODUCT_LIST_LOADING, PRODUCT_LIST_LOADED,
    PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_LOADING, PRODUCT_DETAILS_LOADED
}
    from "../constants/productConstants";
import store from "../store";

export class CProductActions {

    static productsLoaded = false;

    // ADD = [] TO THIS LINE IS TRULY FIX THE BUG WHEN
    // update any page of our shop we had got 
    // the message "Cannot read undefined property"
    static productsIdsLoaded = [];     // ADD = [] TO THIS LINE IS TRULY FIX THE BUG
    listProducts() {
        if (CProductActions.productsLoaded === false) {
            store.dispatch({ type: PRODUCT_LIST_LOADING });
            axios.get('api/products')
                .then(response => {
                    const data = response.data;

                    store.dispatch({ type: PRODUCT_LIST_LOADED, payload: data.products });
                    // console.log('DATA PRODUCTS COUNT', data.products.length)
                    // CProductActions.productsIdsLoaded = new Array(data.products.length)
                    
                    CProductActions.productsLoaded = true;
                })
                .catch(error => {
                    store.dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
                    console.log(`😱 Axios request failed: ${error}`);
                })
        }
    }

    ProductDetailsLoad(productId) {
        // console.log('PRODUCTS IDS LOADED ', CProductActions.productsIdsLoaded[productId - 1])
        // if (CProductActions.productsIdsLoaded[productId - 1] === undefined)  {
            store.dispatch({ type: PRODUCT_DETAILS_LOADING, payload: productId });

            axios.get(`api/products/${productId}`)
                .then(response => {
                    const data = response.data;
                    store.dispatch({ type: PRODUCT_DETAILS_LOADED, payload: data });
                    // CProductActions.productsIdsLoaded[productId-1] = true;
                })
                .catch(error => {
                    store.dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
                    console.log(`😱 Axios request failed: ${error}`);
                })
        // }
    }
}






