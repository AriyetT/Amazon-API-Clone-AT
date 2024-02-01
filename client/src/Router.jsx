// Routing.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './pages/Payment/Payment';
import SignIn from './pages/Auth/SignUp';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import Landing from './pages/Landing/Landing';
import Header from './Components/Header/Header';

function Routing() {
  return (
    <Router>
      <Header /> {/* Render the Header component outside the Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;