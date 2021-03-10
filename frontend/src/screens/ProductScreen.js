import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data';
import '../index.css';


export default function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product)
        return <div>
            Product not found
                </div>
    return (
        <div>
            <Link to="/"> Back to result</Link>
            <div className="row top card card-border-none">
                <div className="col-50rem">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-25rem card-body">
                    <ul>
                        <li>
                            <h1>
                                {product.name}
                            </h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-25rem">
                    <div className="card ">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>
                                        Price
                                    </div>
                                    <div className="price"> ${product.price} 
                                        
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>
                                        Status
                                    </div>
                                    <div >
                                        {
                                            product.countInStock > 0
                                                ? (<span className="success"> In Stock </span>)
                                                : (<span className="danger"> Unavailable </span>)
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block"> Add to Cart</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}
