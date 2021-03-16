import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CCartActions } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const { cartItems } = useSelector(state => state.cart);
    const cartActions = new CCartActions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const addToCart = useCallback(cartActions.addToCart, [productId, qty])
    useEffect(() => {
        if (productId)
            addToCart(productId, qty);

    }, [addToCart, productId, qty]);

    const removeFromCartHandler = () => {

    };
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping')
    }

    return (
        <div className="card row top">
            <div className="col-50rem">
                <h1>Shopping cart</h1>
                {cartItems.length === 0 ?
                    <MessageBox> Cart is empty <Link to="/">Go Shopping</Link>
                    </MessageBox>
                    :
                    <ul>
                        {
                            cartItems.map(item =>
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <Link>
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
                                            <select value={item.qty} onChange={e => addToCart(item.product,
                                                Number(e.target.value))}>
                                                {[...Array(item.countInStock).keys()].map(
                                                    x =>
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                )}
                                            </select>
                                        </div>
                                        <div>
                                            ${item.price}
                                        </div>
                                        <div>
                                            <button type="button" onClick={() =>
                                                removeFromCartHandler(item.product)}>
                                                Delete
                                        </button>
                                        </div>
                                    </div>
                                </li>)
                        }
                    </ul>
                }
            </div>
            <div className="col-25rem">
                <div className="card card-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, item) => a + item.qty, 0)} items)
                                : ${cartItems.reduce((a, item) => a + item.price * item.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block"
                                disabled={cartItems.length === 0}>
                                Proceed to Checkouts
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}