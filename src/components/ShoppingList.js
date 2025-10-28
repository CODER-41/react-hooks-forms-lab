import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

// Receive the new prop: onItemFormSubmit
function ShoppingList({ items, onItemFormSubmit }) { 
  const [selectedCategory, setSelectedCategory] = useState("All");
  // State for the controlled search input
  const [searchText, setSearchText] = useState(""); 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handler for the controlled search input
  function handleSearchChange(search) { 
    setSearchText(search);
  }

  // Filtering logic
  const itemsToDisplay = items.filter((item) => {
    // 1. Category filter
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    
    // 2. Search filter
    const searchMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="ShoppingList">
      {/* Pass the prop down to ItemForm */}
      <ItemForm onItemFormSubmit={onItemFormSubmit} /> 
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        // Pass the search state down as a prop for the controlled input
        search={searchText} 
    
        selectedCategory={selectedCategory}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;