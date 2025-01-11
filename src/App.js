// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  // Step 1: Initialize state to manage the items and the input field
  const [items, setItems] = useState([]);  // stores the list of items
  const [input, setInput] = useState('');   // stores the input field value

  // Step 2: Handle adding a new item to the list
  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');  // Clear the input field
    }
  };

  // Step 3: Handle input changes in the input field
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>

      {/* Input field and button */}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add Item</button>

      {/* Display the list */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;