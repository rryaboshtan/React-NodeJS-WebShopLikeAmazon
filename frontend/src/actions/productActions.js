import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_LOADING, PRODUCT_LIST_LOADED,
    PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_LOADING, PRODUCT_DETAILS_LOADED}
     from "../constants/productConstants";
import store from "../store";

export function listProducts() 
{
    store.dispatch({ type: PRODUCT_LIST_LOADING});
        
        axios.get('api/products')
            .then(response => {
                const data = response.data;
                
                store.dispatch({ type: PRODUCT_LIST_LOADED, payload: data.products });
            })
            .catch (error => {
                store.dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
                console.log(`😱 Axios request failed: ${error}`);
            })
           
}

export function detailsProduct(productId) {
    store.dispatch({ type: PRODUCT_DETAILS_LOADING, payload: productId });

    axios.get(`api/products/${productId}`)
        .then(response => {
            const data = response.data;
            store.dispatch({ type: PRODUCT_DETAILS_LOADED, payload: data });
        })
        .catch(error => {
            store.dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
            console.log(`😱 Axios request failed: ${error}`);
        })

}






