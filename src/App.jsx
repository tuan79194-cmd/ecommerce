import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Checkoutpage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import './App.css'

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
    </Routes>
  )
}

export default App
