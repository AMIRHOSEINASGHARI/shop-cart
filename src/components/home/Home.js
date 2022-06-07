import React, { useContext } from 'react';
import Product from '../product/Product';
import styles from './Home.module.css';

// context
import { ProductContext } from '../../services/ProductContextProvider';

const Home = () => {
    const products = useContext(ProductContext);

    return (
        <div className={styles.mainContainer}>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Home;