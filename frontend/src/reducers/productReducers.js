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
            console.log("Продукты в PRODUCT_LIST_LOADED", action.payload)
            return { loading: false, products: action.payload };

        case PRODUCT_LIST_FAIL:
            console.log("Продукты в PRODUCT_LIST_FAIL", action.payload)
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const productDetailsReducer = (state = { alreadyLoaded: [0,0,0,0,0,0], product: {}, loading: true }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_LOADING:
            // state.alreadyLoaded[1]++;
            return { loading: true};

        case PRODUCT_DETAILS_LOADED:
            console.log('PRODUCT_DETAILS_LOADED',action.payload);

            // if (action.payload) {
            //     console.log('action.payload', action.payload);
            //     const id = action.payload._id;
            //     console.log('action.payload._ID', id);
            //     state.alreadyLoaded = [0,0,0,0,0,0];
            //     let newState = state;
            //      newState.alreadyLoaded = [...state.alreadyLoaded];
                
            //     console.log('STATE.ALREADYLOADED', newState);

            // }

            return { loading: false, product: action.payload};

        case PRODUCT_DETAILS_FAIL:
            console.log("Продукты в PRODUCT_LIST_FAIL", action.payload)
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}
