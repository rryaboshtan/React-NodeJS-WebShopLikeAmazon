import axios from "axios";
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import store from "../store";

let data;
export function listProducts() 
{
        //  const {data} = await axios.get('api/products');
        axios.get('api/products')
            .then(response => {
                data = response.data;
                // console.log("Продукты в ProductActions", data.products);
                store.dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.products });
            })
            .catch (error => {
                store.dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
            })
           
}

// store.subscribe(() => {
//     console.log(store.getState());
// })
// store.dispatch(listProducts());
// store.subscribe(listProducts());

