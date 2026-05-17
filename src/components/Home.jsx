 import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero">
      <h1 className="hero-title">TechPro Admin Portal</h1>
      <p className="hero-copy">
        A polished electronics management console built for smart retailers and operations teams.
        Track inventory, monitor product performance, and keep your catalog up to date across phones,
        laptops, tablets, and accessories with a clear and modern admin workflow.
      </p>

      <div className="feature-grid">
        <div className="category-box feature-phone">
          <h3><span className="home-icon">📱</span>Phones</h3>
          <p>Manage the latest mobile devices with streamlined inventory controls.</p>
        </div>
        <div className="category-box feature-laptop">
          <h3><span className="home-icon">💻</span>Laptops</h3>
          <p>Monitor performance and pricing for premium workstations.</p>
        </div>
        <div className="category-box feature-tablet">
          <h3><span className="home-icon">📟</span>Tablets</h3>
          <p>Track tablet stock, categories, and pricing all from one dashboard.</p>
        </div>
        <div className="category-box feature-accessories">
          <h3><span className="home-icon">🎧</span>Accessories</h3>
          <p>Keep accessories organized and easy to categorize for fast restocking.</p>
        </div>
      </div>

      <div className="section-card">
        <h3>Quick Actions</h3>
        <p>Use the navigation above to browse inventory, edit product details, or list new arrivals in minutes.</p>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '16px' }}>
          Browse Products
        </Link>
      </div>

      <div className="section-card">
        <h3>Contact Support</h3>
        <p>If you need assistance, email <a href="mailto:support@techpro.com">support@techpro.com</a> for prompt help.</p>
      </div>
    </div>
  );
}

export default Home;