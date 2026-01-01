import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import './App.css'
import { StrictMode } from 'react'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>Test Checkout Page</div>} />
    </Routes>  
  )
}

export default App
