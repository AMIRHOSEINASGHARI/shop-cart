import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDetail from './components/product details/ProductDetail';
import ProductContextProvider from './services/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
      </Routes>
    </ProductContextProvider>
  );
};

export default App;