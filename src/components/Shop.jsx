import React from 'react';
import ShopProductCard from './ShopProductCard';

function Shop({ products, onAddToCart }) {
  return (
    <div className="inventory-container">
      <h2 style={{ textAlign: 'center', color: 'white', margin: '20px 0' }}>
        Browse Products
      </h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ShopProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p style={{ color: 'white', textAlign: 'center', width: '100%' }}>
            No products are available right now.
          </p>
        )}
      </div>
    </div>
  );
}

export default Shop;