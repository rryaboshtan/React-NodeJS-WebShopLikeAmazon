/* eslint-disable no-unused-expressions */
import React, {useCallback, useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector} from 'react-redux';
import { CProductActions } from '../actions/productActions';

export default function HomeScreen() {
   
    const productActions = new CProductActions()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const listProducts = useCallback(productActions.listProducts, [])
    useEffect(() => {
        listProducts();
        
        }, [listProducts])

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

