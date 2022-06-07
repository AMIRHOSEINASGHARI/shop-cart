import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//functions
import { isInCart, shortTheTitle } from '../../services/functions';

//context
import { CartContext } from '../../services/CartContextProvider';


const Product = (props) => {
    const {id , title , image , price} = props.productData;
    const {state , dispatch} = useContext(CartContext)

    return (
        <div>
            <img src={image} alt="product" />
            <h1>{shortTheTitle(title)}</h1>
            <h4>{price} $</h4>
            <div>
                <Link to={`/productdetail/${id}`}>Details</Link>
                {
                    isInCart(state , props.productData.id) ?
                    <button onClick={() => dispatch({type: 'INCREASE' , payload: props.productData})}>+</button> :
                    <button onClick={() => dispatch({type: 'ADD_ITEM' , payload: props.productData})}>Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;