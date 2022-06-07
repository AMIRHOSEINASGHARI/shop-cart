import React, { useContext } from 'react';
import Product from '../product/Product';

// context
import { ProductContext } from '../../services/ProductContextProvider';

const Home = () => {
    const products = useContext(ProductContext);

    return (
        <div>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Home;