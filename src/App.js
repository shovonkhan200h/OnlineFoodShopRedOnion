import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Product from './Component/Product/Product';
import Whyus from './Component/Whyus/Whyus';
import Footer from './Component/Footer/Footer';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import CheckOut from './Component/CheckOut/CheckOut';
import OrderComplete from './Component/OrderComplete/OrderComplete';
import SearchResult from './Component/SearchResult/SearchResult';
import Login from './Component/Login/Login';
import { PrivateRoute } from './Component/PrivateRoute/PrivateRoute';

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <cartContext.Provider value={[cart, setCart, loggedIn, setLoggedIn]}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/food/:id" element={<ProductDetails />} />
          <Route path="/OrderComplete" element={<OrderComplete />} />
          <Route path="/SearchResult/:search" element={<SearchResult />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Checkout"
            element={
              <PrivateRoute
                element={<CheckOut />}
                loggedIn={loggedIn}
              />
            }
          />
        </Routes>
        <Footer />
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
