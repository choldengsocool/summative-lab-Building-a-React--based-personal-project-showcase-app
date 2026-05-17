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
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p>{product.description}</p>

        {isEditing ? (
          <div className="card-actions">
            <input
              className="form-control"
              type="number"
              value={updatedPrice}
              onChange={(e) => setUpdatedPrice(e.target.value)}
            />
            <button type="button" className="btn btn-primary" onClick={handlePriceUpdate}>
              Save
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <div className="card-actions">
            <p className="product-price">${product.price}</p>
            <button type="button" className="btn btn-primary" onClick={() => setIsEditing(true)}>
              Edit Price
            </button>
            <button type="button" className="btn btn-danger" onClick={handleRemoveProduct}>
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;