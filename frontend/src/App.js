import React from 'react';
// import logo from './logo.svg';
import './index.css';

import {BrowserRouter, Route} from 'react-router-dom';
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
                    <a  href="/">
                        amazon
                    </a>
                </div>

                <div className="header-links">
                    <a href="/cart">Cart   </a>
                    <a href="/signin">  Sign In</a>

                </div>
            </header>
            <main className="main">
                <Route path="/" component={HomeScreen} exact></Route>
                <Route path="/product/:id" component={ProductScreen}></Route>
                
            </main>

            <footer className="row center">
                All rights reserved.
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default App;