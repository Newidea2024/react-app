import React, { useState } from 'react';

const Sidebar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    // Logic for adding the item will be handled later in the App component
    console.log('Add Item:', inputValue);
  };

  return (
    <div className="sidebar">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter item" 
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default Sidebar;
import React, { useState } from 'react';

const Sidebar = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue) {
      addItem(inputValue);
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div className="sidebar">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter item" 
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default Sidebar;
