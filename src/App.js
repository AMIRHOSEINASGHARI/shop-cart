import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ProductContextProvider from './services/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </ProductContextProvider>
  );
};

export default App;