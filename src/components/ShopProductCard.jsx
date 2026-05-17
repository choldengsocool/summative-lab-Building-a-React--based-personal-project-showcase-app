 import React from 'react';
import { Link } from 'react-router-dom';

function ShopProductCard({ product, onAddToCart }) {
  return (
    <div className="card shop-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
      </Link>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p>{product.description}</p>
        <div className="card-actions shop-actions">
          <p className="product-price">${product.price}</p>
          <Link to={`/products/${product.id}`} className="btn btn-secondary">
            View Details
          </Link>
          <button type="button" className="btn btn-primary" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopProductCard;