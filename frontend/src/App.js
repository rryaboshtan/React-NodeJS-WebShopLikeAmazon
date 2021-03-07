import React from 'react';
// import logo from './logo.svg';
import './index.css';
import data from "./data";
import Product from './components/Product';

function App() {
    return (
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
                <div className="row center">
                    {data.products.map((product) => (

                        <Product key={product._id} product={product}> </Product>
                        
                    ))
                    }

                </div>
            </main>

            <footer className="flexCentered">
                All rights reserved.
                  </footer>
        </div>

    );
}

export default App;