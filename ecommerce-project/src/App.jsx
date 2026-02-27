import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkoutpage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css';
import { NotFoundPage } from './pages/NotFoundPage';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('/api/cart-items')
            .then((response) => {
                console.log(response.data);
                setCart(response.data);
            });
    }, []);

  return (
    <Routes>
        {/* index does the same thing as path="/" */}
        <Route 
            index 
            element={<HomePage cart={cart}/>} />

        <Route 
            path="checkout" 
            element={<Checkoutpage cart={cart}/>} />

        <Route 
            path="orders" 
            element={<OrdersPage />} />

        <Route 
            path="tracking" 
            element={<TrackingPage />} />
        
        <Route 
            path="*"
            element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App
