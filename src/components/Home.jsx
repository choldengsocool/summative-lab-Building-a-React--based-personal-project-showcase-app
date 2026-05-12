import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>TechPro Admin Portal</h1>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Welcome to the central management system for your electronics empire.
        TechPro Admin Portal is a centralized electronics management system designed to simplify inventory control, product tracking, and administrative operations. 
        From phones and laptops to tablets and accessories, the platform helps businesses efficiently manage stock, organize products, monitor pricing, and streamline daily operations through a modern and user-friendly interface.
        These are the services we provide to help you stay on top of your electronics inventory and operations:
      </p>
      
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
        <div className="category-box">
          <h3>📱 Phones</h3>
          <p>Manage the latest mobile devices.</p>
        </div>
        <div className="category-box">
          <h3>💻 Laptops</h3>
          <p>Inventory control for high-end workstations.</p>
        </div>
        <div className="category-box">
          <h3>📟 Tablets</h3>
          <p>Track tablet stock and pricing.</p>
        </div>
        <div className="category-box">
          <h3>🎧 Accessories</h3>
          <p>From chargers to premium audio gear.</p>
        </div>
      </div>

      <hr style={{ margin: "40px 0" }} />
      
      <h3>Quick Actions</h3>
      <p>Use the navigation above to <strong>Browse Inventory</strong> or <strong>List New Arrivals</strong>.</p>
      <h3>Contact Support</h3>
      <p>If you need assistance, please contact our support team at <a href="mailto:support@techpro.com">support@techpro.com</a>.</p>
    </div>
  );
}

export default Home;