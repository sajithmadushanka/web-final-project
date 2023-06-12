import * as React from 'react';
import HomePage from './pages/index';
import ShopPage from './pages/shop';
import CartPage from './pages/cart';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import AccountPage from './pages/account';

import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {


  return (
    <>
    
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="account" element={<AccountPage />} />
       
      </Routes>

      {/* Uncomment if you want to test ItemsList separately */}
      {/* <ItemsList /> */}
 
      
    </>
  );
}

export default App;
