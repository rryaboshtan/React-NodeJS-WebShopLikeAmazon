import {
    PRODUCT_LIST_FAIL, PRODUCT_LIST_LOADING, PRODUCT_LIST_LOADED,
    PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_LOADED, PRODUCT_DETAILS_LOADING
}
    from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_LOADING:
            return { loading: true };

        case PRODUCT_LIST_LOADED:
            return { loading: false, products: action.payload };

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const productDetailsReducer = (state = { alreadyLoaded: [0, 0, 0, 0, 0, 0], product: {}, loading: true }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_LOADING:
            return { loading: true };

        case PRODUCT_DETAILS_LOADED:
            return { loading: false, product: action.payload };

        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
