import React, { Children, createContext, useEffect, useState } from 'react';
import getProducts from './api';

export const ProductContext = createContext();

const ProductContextProvider = ({Children}) => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(await getProducts())
        }
        fetchData();
    }, [])
    return (
        <ProductContext.Provider value={products}>
            {Children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;