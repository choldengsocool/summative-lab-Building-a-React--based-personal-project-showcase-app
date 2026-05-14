import React, { useState } from 'react';

function ProductCard({ product, onUpdate, onRemove }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(product.price);

  // PATCH Request: Updates the simulated backend
  function handlePriceUpdate() {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseFloat(updatedPrice) }),
    })
      .then((res) => res.json())
      .then((data) => {
        onUpdate(data); // Syncs state in App.jsx
        setIsEditing(false);
      });
  }

  // DELETE Request: Removes product from backend
  function handleRemoveProduct() {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (response.ok) {
          onRemove(product.id); // Syncs state in App.jsx
        } else {
          console.error("Failed to remove product.");
        }
      })
      .catch(error => {
        console.error("Error removing product:", error);
      });
  }

  return (
    <div className="card">
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} 
      />
      <div style={{ padding: "15px" }}>
        <h3>{product.name}</h3>
        <p style={{ color: "#00d4ff", fontWeight: "bold" }}>{product.category}</p>
        <p style={{ fontSize: "0.9rem", color: "#ccc" }}>{product.description}</p>
        
        {isEditing ? (
          <div style={{ marginTop: "10px" }}>
            <input 
              type="number" 
              value={updatedPrice} 
              onChange={(e) => setUpdatedPrice(e.target.value)}
              style={{ width: "70px", padding: "5px", marginRight: "5px" }}
            />
            <button onClick={handlePriceUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)} style={{ marginLeft: "5px", backgroundColor: "#666" }}>
              Cancel
            </button>
          </div>
        ) : (
          <div style={{ marginTop: "10px" }}>
            <p style={{ fontSize: "1.2rem" }}>Price: ${product.price}</p>
            <button onClick={() => setIsEditing(true)}>Edit Price</button>
            <button onClick={handleRemoveProduct} style={{ marginLeft: "5px", backgroundColor: "#ff4444" }}>
              Remove Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;