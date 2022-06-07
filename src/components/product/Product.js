import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {id , title , image , price} = props.productData;

    return (
        <div>
            <img src={image} alt="product" />
            <h1>{title}</h1>
            <h4>{price} $</h4>
            <div>
                <Link to={`/productdetail/${id}`}>Details</Link>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;