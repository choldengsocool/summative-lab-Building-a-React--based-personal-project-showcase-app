import React, { useState } from 'react';
import ProductCard from './ProductCard';

function ProductContainer({ products, onUpdate }) {
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
          style={{
            padding: "12px",
            width: "60%",
            borderRadius: "25px",
            border: "1px solid #00d4ff",
            outline: "none"
          }}
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
            />
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center", width: "100%" }}>
            No products found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductContainer;