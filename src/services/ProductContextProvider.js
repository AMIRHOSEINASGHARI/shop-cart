import React, { createContext, useEffect, useState } from 'react';
import getProducts from './api';

export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(await getProducts())
        }
        fetchData();
    }, [])
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;