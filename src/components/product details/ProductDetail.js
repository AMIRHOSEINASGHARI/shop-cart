import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../services/api';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
    const [product , setProduct] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`${BASE_URL}/products/${params.id}`)
            .then(response => setProduct(response.data))
    })

    return (
        <div className={styles.mainDetailContainer}>
            <div className={styles.detailContainer}>
                <img src={product.image} alt="product image" />
                <div className={styles.productDetail}>
                    <h1>{product.title}</h1>
                    <h3>{product.category}</h3>
                    <p>{product.description}</p>
                    <h2>Price: {product.price} $</h2>
                    <Link to='/'>Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;