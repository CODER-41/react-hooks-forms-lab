import React from "react";

// Added selectedCategory to props for controlled select
function Filter({ onCategoryChange, onSearchChange, search, selectedCategory }) { 
  function handleSearchChange(event) {
    // Call the callback function with the new search text (value)
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        // Controlled input: change updates state via prop
        onChange={handleSearchChange}
      />
      {/* Optional: Making the select controlled */}
      <select 
        name="filter" 
        onChange={onCategoryChange}
        value={selectedCategory} 
      > 
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;