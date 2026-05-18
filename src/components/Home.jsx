import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-page container">
      <section className="hero">
        <h1 className="hero-title">TechPro Admin Portal</h1>
        <p className="hero-copy">
          A polished electronics management console built for smart retailers and operations teams.
          Track inventory, monitor product performance, and keep your catalog up to date across phones,
          laptops, tablets, and accessories with a clear and modern admin workflow.
        </p>
      </section>

      <div className="feature-grid">
        <div className="category-box feature-phone">
          <div className="category-image-wrapper">
            <img
              className="category-image"
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
              alt="Phones"
            />
          </div>
          <h3>Phones</h3>
          <p>Manage the latest mobile devices with streamlined inventory controls.</p>
        </div>
        <div className="category-box feature-laptop">
          <div className="category-image-wrapper">
            <img
              className="category-image"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
              alt="Laptops"
            />
          </div>
          <h3>Laptops</h3>
          <p>Monitor performance and pricing for premium workstations.</p>
        </div>
        <div className="category-box feature-tablet">
          <div className="category-image-wrapper">
            <img
              className="category-image"
              src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=800&q=80"
              alt="Tablets"
            />
          </div>
          <h3>Tablets</h3>
          <p>Track tablet stock, categories, and pricing all from one dashboard.</p>
        </div>
        <div className="category-box feature-accessories">
          <div className="category-image-wrapper">
            <img
              className="category-image"
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Headphones"
            />
          </div>
          <h3>Accessories</h3>
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