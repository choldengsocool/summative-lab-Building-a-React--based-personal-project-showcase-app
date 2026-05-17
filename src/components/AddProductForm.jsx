import React, { useState } from "react";

function AddProductForm({ onAdd }) {
    const [formData, setFormData] = useState({
    name: "",
    category: "Phones",
    price: "",
    image: "",
    description: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
   fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price)
      }),
    })
        .then((res) => res.json())
        .then((newProduct) => {
        onAdd(newProduct);
        setFormData({
          name: "",
          category: "Phones",
          price: "",
          image: "",
          description: ""
        });
      })
      .catch((error) => {
        console.error("Failed to add product:", error);
      });
  }

  return (
    <div className="form-card">
      <h2>List New Tech Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Product Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <select
          className="form-control"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        >
          <option value="Phones">Phones</option>
          <option value="Laptops">Laptops</option>
          <option value="Tablets">Tablets</option>
          <option value="Accessories">Accessories</option>
        </select>
        <input
          className="form-control"
          type="number"
          placeholder="Price"
          required
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Image URL"
          required
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <button type="submit" className="btn btn-primary primary-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;