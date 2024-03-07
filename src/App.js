import React, { createContext, useState } from 'react';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Product from './Component/Product/Product';
import Whyus from './Component/Whyus/Whyus';
import Footer from './Component/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Component/ProductDetails/ProductDetails';
import './App.css'
import CheckOut from './Component/CheckOut/CheckOut';
import OrderComplete from './Component/OrderComplete/OrderComplete';
import SearchResult from './Component/SearchResult/SearchResult';
import Login from './Component/Login/Login';
export const cartContext = createContext()


function App() {
const [cart,setCart] = useState([])
const [logedIn,setLogedInUser]= useState(false)



  return (
    <cartContext.Provider value={[cart,setCart,logedIn,setLogedInUser]}>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/food/:id' element={<ProductDetails></ProductDetails>} />
            <Route path='/CheckOut' element={<CheckOut></CheckOut>}/>
            <Route path='/OrderComplete' element={<OrderComplete></OrderComplete>}/>
            <Route path='/SearchResult/:search' element={<SearchResult></SearchResult>}/>
            <Route path='/Login' element={<Login></Login>}/>
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
