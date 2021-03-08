import React from 'react';
// import logo from './logo.svg';
import './index.css';
import {Route, BrowserRouter} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';


function App() {
    return (
        <BrowserRouter>
        <div className="grid-container">
            <header className="flexRow">
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
                
                    <Route path="/product/:id" component={ProductScreen}/>
                    <Route path="/" component ={HomeScreen} exact/> 
            </main>

            <footer className="flexCentered">
                All rights reserved.
            </footer>
        </div>
        </BrowserRouter>
    );
}

export default App;