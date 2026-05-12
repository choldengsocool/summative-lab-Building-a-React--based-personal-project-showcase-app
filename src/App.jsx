import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductContainer from './components/ProductContainer';
import AddProductForm from './components/AddProductForm';
import RemoveProductForm from './components/RemoveProductForm';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={
            <ProductContainer 
              products={products} 
              onUpdate={updateProduct} 
            />
          } />
          <Route path="/add" element={<AddProductForm onAdd={addProduct} />} />
          <Route path="/remove" element={<RemoveProductForm products={products} onRemove={removeProduct} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
