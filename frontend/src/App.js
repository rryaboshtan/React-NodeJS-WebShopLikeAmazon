import React from 'react';
// import logo from './logo.svg';
import './index.css';
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
              <button>
                 &#9776;
              </button>
          <a className="brand" href="/"> 
            amazon 
          </a>
        </div>

        <div className="header-links">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>

        </div>
      </header>
      <main className="main">
        <div className="row center">
          { data.products.map((product) =>(

          
            <div key={product._id} className="card">
              <a href={`/product/${product._id}`}>
                <img  
                  className="medium" 
                  src={product.image} 
                  alt="product"/>
              </a>

              <div className="card-body">
                <a href={`/product/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
              </div>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                  <i className="fa fa-star-o"></i>
                </span>
              </div>
              <div className="price">
                ${product.price}
              </div>
            </div>
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
