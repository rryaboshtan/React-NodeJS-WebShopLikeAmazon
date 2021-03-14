import React from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
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
                        <Link to="/cart">Cart   </Link>
                        <Link to="/signin">  Sign In</Link>

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