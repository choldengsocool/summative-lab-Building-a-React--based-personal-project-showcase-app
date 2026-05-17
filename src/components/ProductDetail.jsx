import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail({ products, onAddToCart }) {
  const { productId } = useParams();
  const product = products.find((item) => String(item.id) === String(productId));

  if (!product) {
    return (
      <div className="inventory-container">
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
        <Link to="/shop" className="btn btn-secondary">
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="inventory-container product-detail-page">
      <div className="detail-card">
        <img src={product.image} alt={product.name} className="product-image detail-image" />
        <div className="detail-body">
          <h2>{product.name}</h2>
          <p className="product-category">{product.category}</p>
          <p>{product.description}</p>
          <p className="product-price detail-price">${product.price}</p>
          <div className="detail-actions">
            <button type="button" className="btn btn-primary" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
            <Link to="/cart" className="btn btn-secondary">
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;