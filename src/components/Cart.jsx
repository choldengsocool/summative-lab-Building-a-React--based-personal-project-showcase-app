 import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity }) {
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="inventory-container cart-page">
      <h2 style={{ textAlign: 'center', color: 'white', margin: '20px 0' }}>
        Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty.</p>
          <Link to="/shop" className="btn btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} className="cart-image" />
                <div className="cart-details">
                  <h3>{item.product.name}</h3>
                  <p className="product-category">{item.product.category}</p>
                  <p>{item.product.description}</p>
                  <div className="cart-controls">
                    <div className="quantity-control">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <p className="product-price">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <button type="button" className="btn btn-danger" onClick={() => onRemoveFromCart(item.product.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Cart Total</h3>
            <p className="product-price">${total.toFixed(2)}</p>
            <div className="cart-summary-actions">
              <Link to="/shop" className="btn btn-secondary">
                Continue Shopping
              </Link>
              <button type="button" className="btn btn-primary" disabled>
                Checkout (coming soon)
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;