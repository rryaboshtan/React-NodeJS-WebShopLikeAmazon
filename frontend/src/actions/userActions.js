import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants"
import axios from "axios";
import store from "../store";


export const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

try {
    const { data } = await axios.post('/api/users/signin', { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
} catch (error) {
    dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
            error.message,
    })
}
};

export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    // localStorage.setItem('cartItems', JSON.stringify([]));
    localStorage.removeItem('cartItems');

    store.getState().cart.cartItems = [];
    dispatch({ type: USER_SIGNOUT });
}