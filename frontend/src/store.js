import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};

const reducer = combineReducers({
    productListReducer
})

const store = createStore(
    reducer, 
    initialState, 
    // composeWithDevTools(applyMiddleware(thunk) )
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
