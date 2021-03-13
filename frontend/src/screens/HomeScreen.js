/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    
    useEffect(() => {
        listProducts();
    }, [])

    const ProductState = useSelector(state => state.productListReducer);
    
    const {loading, products, error} = ProductState;
    
    return (
        <div>
            { loading ?
                    <LoadingBox></LoadingBox>
                : error ?
                    <MessageBox type="danger">{error}</MessageBox>
                :
                        <div className="row center">
                            {products.map((product) => (
                                <Product key={product._id} product={product}> </Product>
                            ))
                            }
                        </div>
            }
        </div>
        );
    }

