import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkoutpage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {

  return (
    <Routes>
        {/* index does the same thing as path="/" */}
        <Route 
            index 
            element={<HomePage />} />

        <Route 
            path="checkout" 
            element={<Checkoutpage />} />

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
