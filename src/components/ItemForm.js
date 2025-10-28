import React, { useState } from "react";

function uuid() { return Math.random().toString(16).slice(2) } 

function ItemForm({ onItemFormSubmit }) {
  // Initial state for controlled inputs
  const [formData, setFormData] = useState({
    name: "",
    price: "", 
    category: "Produce", // Initial value for <select>
  });

  //  change handler for all controlled inputs
  function handleChange(event) {
    const { name, value } = event.target;
    // The spread operator is used to copy the existing formData state
    //Into a new object, The[name]: value the adds or updates the specific field
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default browser form submission

    
    const newItem = {
      id: uuid(), 
      name: formData.name,
      category: formData.category,
  
    };

    // Call the callback prop to add the new item to the list in App state
    onItemFormSubmit(newItem);

    // Reset form state after submission
    setFormData({
      name: "",
      price: "",
      category: "Produce",
    });
  }

  return (
    <form className="ItemForm" onSubmit={handleSubmit}>
      <h3>Add a new item:</h3>
      
      {/* Controlled Input: Name */}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      {/* Controlled Input: Price (using number type for demonstration) */}
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        step="0.01"
        value={formData.price}
        onChange={handleChange}
      />

      {/* Controlled Select Input: Category */}
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={formData.category} // Value reflects state
        onChange={handleChange} // Change updates state
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;