import React from 'react';

const Product = (props) => {
    const {id , title , image , price} = props.productData;

    return (
        <div>
            <img src={image} alt="product" />
            <h1>{title}</h1>
            <h4>{price} $</h4>
            <div>
                <a href="#">Details</a>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;