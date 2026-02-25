import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import './App.css'

function App() {

  return (
    <Routes>
        {/* index does the same thing as path="/" */}
        <Route index element={<HomePage />} />

        <Route path="checkout" element={
            <div>Test checkout page</div>
        } />
        
    </Routes>
  )
}

export default App
