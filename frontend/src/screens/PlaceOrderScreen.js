import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PlaceOrderScreen(props) {
    const cart = useSelector(state => state.cart);
    if (!cart.paymentMethod)
        props.history.push('/payment/payment');
    
    const formatPriceHelper = num => Number(num.toFixed(2)); // "5.123" => "5.12" => 5.12
    cart.itemsPrice = formatPriceHelper(cart.cartItems.reduce((a, item) =>
        a + item.qty * item.price, 0));
    cart.shippingPrice = cart.itemsPrice > 100 ? formatPriceHelper(0) : formatPriceHelper(10);
    cart.taxPrice = formatPriceHelper(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    console.log('cart with totalPriceeeeeeee', cart);

    const placeOrderHandler = () => {

    }
    
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-50rem">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2> User address info </h2>
                                <p>
                                    <strong>Name: </strong> {cart.shippingAddress.fullName} <br />
                                    <strong>Address: </strong> {cart.shippingAddress.address},
                                    {cart.shippingAddress.city}, {cart.shippingAddress.ppostalCode},
                                    {cart.shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2> Payment </h2>
                                <p>
                                    <strong>Method: </strong> {cart.paymentMethod} <br />
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2> Order Items </h2>
                                <ul>
                                    {
                                        cart.cartItems.map(item =>
                                            <li key={item.product}>
                                                <div className="row">
                                                    <div>
                                                        <Link to={`/${item.product}`} data-link="imageLink">
                                                            <img src={item.image} alt={item.name}
                                                                className="small"></img>
                                                        </Link>
                                                    </div>

                                                    <div className="minw-30rem">
                                                        <Link to={`/${item.product}`}>
                                                            {item.name}
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        {item.qty} x ${item.price} = ${item.qty * item.price}
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-25rem">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div> Items</div>
                                    <div>${cart.itemsPrice.toFixed(2)}</div>
                                </div>
                           </li>
                            <li>
                                <div className="row">
                                    <div>Shipping</div>
                                    <div>${cart.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div> Tax</div>
                                    <div>${cart.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        <strong> Total Price </strong>
                                    </div>
                                    <div>
                                        <strong> ${cart.totalPrice.toFixed(2)} </strong>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={placeOrderHandler}
                                    disabled={cart.cartItems.Length}
                                    className="primary block" >
                                    Place Order
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}