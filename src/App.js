import React from 'react';
import { Route, Routes } from 'react-router-dom';

//components
import Cart from './components/cart/Cart';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProductDetail from './components/product details/ProductDetail';

//context
import ProductContextProvider from './services/ProductContextProvider';
import CartContextProvider from './services/CartContextProvider'

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;