import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductContainer({ products, onUpdate, onRemove, logs }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtering products dynamically by Name or Category
  const displayedProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="inventory-container">
      <h2 style={{ textAlign: "center", color: "white", margin: "20px 0" }}>
        Available Inventory
      </h2>
      
      {/* Search Bar Requirement */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input 
          type="text" 
          placeholder="Search for phones, laptops, or tablets..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Responsive Grid */}
      <div className="product-grid">
        {displayedProducts.length > 0 ? (
          displayedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center", width: "100%" }}>
            No products found matching your search.
          </p>
        )}
      </div>

      <div className="audit-log">
        <h2>Security Audit Log</h2>
        {logs && logs.length > 0 ? (
          <div className="audit-log-list">
            {logs.map((entry) => (
              <div key={entry.id} className="log-entry">
                <p className="log-meta">
                  <strong>{entry.action}</strong> &middot; {new Date(entry.timestamp).toLocaleString()}
                </p>
                <pre className="log-details">{JSON.stringify(entry.details, null, 2)}</pre>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#ddd" }}>No security events recorded yet.</p>
        )}
      </div>
    </div>
  );
}

export default ProductContainer;