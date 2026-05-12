import React, { useState, useEffect } from 'react';

function RemoveProductform({ products, onRemove }) {
    const [selectedId, setSelectedId] = useState("");
    const [statusMessage, setStatusMessage] = useState("");

    useEffect(() => {
        if (products.length > 0) {
            setSelectedId(String(products[0].id));
        } else {
            setSelectedId("");
        }
    }, [products]);

    function handleSubmit(event) {
        event.preventDefault();
        if (!selectedId) {
            setStatusMessage("Please select a product to remove.");
            return;
        }

        fetch(`http://localhost:3000/products/${selectedId}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok) {
                setStatusMessage("Product removed successfully.");
                onRemove(selectedId);
            } else {
                setStatusMessage("Failed to remove product.");
            }
        })
        .catch(error => {
            console.error("Error removing product:", error);
            setStatusMessage("An error occurred while removing the product.");
        })
    }

return (
    <div style={{ marginTop: "520px", margin: "0 auto", padding: "24px", maxWidth: "400px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
    <h2>Remove product from Inventory</h2>
    <p style={{ color: "#ddd", marginBottom: "20px" }}>
    Select a product below to remove it from the inventory:
    </p>

    <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "12px"}}>
    <label style={{display: "flex", flexDirection: "column", color: "#fff" }}>
        Choose Product:
        <select
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        style={{ padding: "10px", borderRadius: "8px", border: "1px solid #00d4ff", marginTop: "8px" }}
        disabled={products.length === 0}
        >
            {products.length === 0 ? (
            <option value="">No products available</option>
            ) : (
                products.map((product) => (
                <option key={product.id} value={product.id}>
                    {product.name} - {product.category} - ${product.price}
                </option>
                ))
            )}
        </select>
    </label>

    <button
        type="submit"
        disabled={!selectedId}
        style={{ padding: "12px", borderRadius: "8px", border: "none", backgroundColor: "#00d4ff", color: "#000", fontWeight: "bold" }}
    >
        Remove Product
    
    </button>
    </form>

    {statusMessage && (
        <p style={{ marginTop: "18px", color: "#fff" }}>{statusMessage}</p>
      )}
    </div>
);
}

export default RemoveProductform;