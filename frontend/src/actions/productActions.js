import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_LOADING, PRODUCT_LIST_LOADED } from "../constants/productConstants";
import store from "../store";

export function listProducts() 
{
    store.dispatch({ type: PRODUCT_LIST_LOADING});
        //  const {data} = await axios.get('api/products');
        axios.get('api/products')
            .then(response => {
                const data = response.data;
                // console.log("Продукты в ProductActions", data.products);
                store.dispatch({ type: PRODUCT_LIST_LOADED, payload: data.products });
            })
            .catch (error => {
                store.dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
                console.log(`😱 Axios request failed: ${error}`);
            })
           
}



