import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
    const { shippingAddress } = useSelector(state => state.cart);
    if (!shippingAddress.address)
        props.history.push('/shipping/shipping');
    
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder/placeorder');
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> Payment Method</h1>
                </div>
                <div>
                    <label htmlFor="paypal" data-label="pay"> PayPal </label>
                    <input
                        type="radio"
                        id="paypal"
                        value="PayPal"
                        name="paymentMethod"
                        required
                        checked
                        onChange={e => setPaymentMethod(e.target.value)}
                    ></input> 
                </div>
                <div>
                    <label htmlFor="stripe" data-label="pay"> Stripe </label>
                    <input
                        type="radio"
                        id="stripe"
                        value="Stripe"
                        name="paymentMethod"
                        required
                        onChange={e => setPaymentMethod(e.target.value)}
                    ></input>
                </div>
                <div>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}