import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/Home';
import Menu from './pages/Menu';
import AboutUS from './pages/AboutUs';
import Timings from './pages/Timings';
import Order from './pages/Order';
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext'; // Import the CartProvider
import Checkout from './pages/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/timings' element={<Timings />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<AboutUS />} />
            <Route path='/order' element={<Order />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </>
);