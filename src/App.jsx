import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import ProductContainer from './components/ProductContainer';
import AddProductForm from './components/AddProductForm';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [logs, setLogs] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const API_URL = "http://localhost:3000/products";

  // GET Request: Fetching data from db.json
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addLogEntry = (action, details) => {
    const entry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      timestamp: new Date().toISOString(),
      action,
      details,
      actor: "admin",
    };

    setLogs((prevLogs) => [entry, ...prevLogs]);
    console.log("[Security Audit]", action, details);
  };

  // Handler for POST (Adding new product)
  
  const handleLogin = (username, password) => {
    const success = Boolean(username && password);
    addLogEntry("LOGIN ATTEMPT", {
      username,
      result: success ? "SUCCESS" : "FAILURE",
    });

    if (!success) {
      return;
    }

    setCurrentUser({ username });
    addLogEntry("LOGIN SUCCESS", { username });
  };

  const handleLogout = () => {
    if (!currentUser) return;
    addLogEntry("LOGOUT", { username: currentUser.username });
    setCurrentUser(null);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => String(item.product.id) === String(product.id));
      if (existing) {
        return prevItems.map((item) =>
          String(item.product.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          String(item.product.id) === String(productId)
            ? { ...item, quantity: Math.max(1, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => String(item.product.id) !== String(productId)));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    addLogEntry("PRODUCT CREATED", {
      productId: newProduct.id,
      name: newProduct.name,
      category: newProduct.category,
      price: newProduct.price,
    });
  };

  const removeProduct = (removedId) => {
    const removedProduct = products.find((product) => String(product.id) === String(removedId));
    setProducts(products.filter((product) => String(product.id) !== String(removedId)));
    addLogEntry("PRODUCT REMOVED", {
      productId: removedId,
      name: removedProduct?.name || "Unknown",
      category: removedProduct?.category || "Unknown",
    });
  };

  // Handler for PATCH (Updating price)
  const updateProduct = (updatedProd) => {
    const existingProduct = products.find((product) => product.id === updatedProd.id);
    const updatedArray = products.map(p => p.id === updatedProd.id ? updatedProd : p);
    setProducts(updatedArray);
    addLogEntry("PRODUCT UPDATED", {
      productId: updatedProd.id,
      name: existingProduct?.name || "Unknown",
      category: existingProduct?.category || "Unknown",
      oldPrice: existingProduct?.price,
      newPrice: updatedProd.price,
    });
  };

  return (
    <Router>
      <Navbar currentUser={currentUser} onLogout={handleLogout} cartCount={cartItems.length} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} onAddToCart={addToCart} />} />
          <Route path="/products/:productId" element={<ProductDetail products={products} onAddToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} onUpdateQuantity={updateCartQuantity} />} />
          <Route
            path="/admin"
            element={
              currentUser ? (
                <ProductContainer
                  products={products}
                  onUpdate={updateProduct}
                  onRemove={removeProduct}
                  logs={logs}
                  currentUser={currentUser}
                />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/add"
            element={
              currentUser ? (
                <AddProductForm onAdd={addProduct} />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
