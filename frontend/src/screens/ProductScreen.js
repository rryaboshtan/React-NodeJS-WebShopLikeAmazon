import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetailsLoad } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';


export default function ProductScreen(props) {

    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    // const [repeatedProductLoad, setRepeatedProductLoad] = useState(false);
    const ProductDetailsState = useSelector(state => state.productDetailsReducer);
    const { loading, error, product, alreadyLoaded } = ProductDetailsState;
    console.log('PRODUCT', product);


    useEffect(() => {
        if (alreadyLoaded < 2)
            ProductDetailsLoad(productId);
    }, [alreadyLoaded, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    };


    return (
        <div>
            { loading ?
                <LoadingBox></LoadingBox>
                : error ?
                    <MessageBox type="danger">{error}</MessageBox>
                    :
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
                                            {
                                                product.countInStock > 0 && (
                                                    <>
                                                        <li>
                                                            <div className="row">
                                                                <div>Qty</div>
                                                                <div>
                                                                    <select value={qty} onChange={e => setQty(e.target.value)}>
                                                                        {[...Array(product.countInStock).keys()].map(
                                                                            x =>
                                                                                <option key={x + 1} value={x + 1}>
                                                                                    {x + 1}
                                                                                </option>
                                                                        )}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <button onClick={addToCartHandler}
                                                                className="primary block"> Add to Cart</button>
                                                        </li>
                                                    </>)
                                            }
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>

    )
}
