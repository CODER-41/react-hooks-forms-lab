import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items"; // Assuming this exists

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // New function to add an item to the list
  function handleAddItem(newItem) {
    //  Use the spread operator to create a new array with the old items and the new item
    setItems([...items, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      {/* Pass the handleAddItem function as onItemFormSubmit prop */}
      <ShoppingList items={items} onItemFormSubmit={handleAddItem} /> 
    </div>
  );
}

export default App;