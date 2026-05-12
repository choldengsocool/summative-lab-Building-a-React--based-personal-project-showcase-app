import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductContainer from './components/ProductContainer';
import AddProductForm from './components/AddProductForm';
import RemoveProductForm from './components/RemoveProductForm';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const API_URL = "http://localhost:3000/products";

  // GET Request: Fetching data from db.json
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Handler for POST (Adding new product)
  
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const removeProduct = (removedId) => {
    setProducts(products.filter((product) => product.id !== Number(removedId)));
  };

  // Handler for PATCH (Updating price)
  const updateProduct = (updatedProd) => {
    const updatedArray = products.map(p => p.id === updatedProd.id ? updatedProd : p);
    setProducts(updatedArray);
  };

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
