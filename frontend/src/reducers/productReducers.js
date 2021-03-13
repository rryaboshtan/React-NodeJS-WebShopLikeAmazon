import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } 
    from "../constants/productConstants";

export const productListReducer = (state ={products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            // console.log("Продукты в PRODUCT_LIST_REQUEST", action.payload)
            return { loading: true, products: action.payload};
            
        case PRODUCT_LIST_SUCCESS: 
            // console.log("Продукты в PRODUCT_LIST_SUCCESS", action.payload)
            return { loading: false, products: action.payload };
        
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}