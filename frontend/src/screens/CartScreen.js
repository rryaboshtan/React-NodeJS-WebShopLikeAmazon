import React, { useCallback, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { CCartActions } from '../actions/cartActions';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    // const dispatch = useDispatch(); 

    const cartActions = new CCartActions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const addToCart = useCallback(cartActions.addToCart, [productId, qty])
    useEffect(() => {
        if (productId)
            addToCart(productId, qty);
        
    }, [addToCart, productId, qty]);

    return (
        <div>
            <h1>
                CartScreen
            </h1>
            <p>
                ADD TO CART : ProductId: {productId} Qty: {qty}
            </p>
        </div>
    );
}