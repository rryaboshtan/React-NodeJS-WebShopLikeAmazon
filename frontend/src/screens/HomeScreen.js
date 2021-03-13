/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector} from 'react-redux';
import { listProducts } from '../actions/productActions';
// import store from '../store';

export default function HomeScreen() {
    // const dispatch = useDispatch();
    
    // const { loading, products, error } = useSelector(state => state.productListReducer);
    
    //  console.log("Продукты в HomeScreen", products)
    let OurState;
    let loading = true, products = [], error;
    useEffect(() => {
        listProducts();
        
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    OurState = useSelector(state => state.productListReducer);
    // OurState = store.getState();
    // console.log(OurState);
    console.log(OurState.products);
    products = OurState.products;

    loading = false;
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

