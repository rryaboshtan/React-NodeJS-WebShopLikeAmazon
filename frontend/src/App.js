import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    const cart = useSelector(state => state.cartReducer);
    const { cartItems } = cart;
    console.log("CART ITEMSSSSSSSSSSSSSSSSSS", cartItems)
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div className="brand">
                        <button>
                            &#9776;
                    </button>
                        <Link to="/">
                            amazon
                        </Link>
                    </div>

                    <div className="header-links">
                        <Link to="/cart">Cart
                         {(cartItems.length > 0) &&
                            <span className="badge">{ cartItems.length}</span>
                        }
                        </Link>

                        <Link to="/signin"> Sign In</Link>

                    </div>
                </header>
                <main className="main">
                    <Route path="/cart/:id?" component={CartScreen} exact></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                    <Route path="/:id" component={ProductScreen} exact></Route>
                </main>

                <footer className="row center">
                    All rights reserved.
            </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;