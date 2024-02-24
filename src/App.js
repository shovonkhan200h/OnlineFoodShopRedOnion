import React, { createContext, useEffect, useState } from 'react';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Product from './Component/Product/Product';
import Whyus from './Component/Whyus/Whyus';
import Footer from './Footer/Footer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import './App.css'
import Cart from './Component/Cart/Cart';
import CheckOut from './Component/CheckOut/CheckOut';
import OrderComplete from './OrderComplete/OrderComplete';
export const cartContext = createContext()


function App() {
const [cart,setCart] = useState([])



  return (
    <cartContext.Provider value={[cart,setCart]}>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/food/:id' element={<ProductDetails></ProductDetails>} />
            <Route path='/CheckOut' element={<CheckOut></CheckOut>}/>
            <Route path='/OrderComplete' element={<OrderComplete></OrderComplete>}/>
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </cartContext.Provider>



  );
}


const MainPage = () => {
  return (
    <>
      <Hero />
      <Product />
      <Whyus />
    </>
  );
};

export default App;
