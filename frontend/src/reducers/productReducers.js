import { PRODUCT_LIST_FAIL, PRODUCT_LIST_LOADING, PRODUCT_LIST_LOADED } 
    from "../constants/productConstants";

export const productListReducer = (state ={products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_LOADING:
            // console.log("Продукты в PRODUCT_LIST_LOADING", action.payload)
            return { loading: true};
            
        case PRODUCT_LIST_LOADED: 
            console.log("Продукты в PRODUCT_LIST_LOADED", action.payload)
            return { loading: false, products: action.payload };
        
        case PRODUCT_LIST_FAIL:
            console.log("Продукты в PRODUCT_LIST_FAIL", action.payload)
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}