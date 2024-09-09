
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ItemList from './ItemList';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  return (
    <div className="app-container">
      <Sidebar />
      <ItemList items={items} />
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ItemList from './ItemList';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const addItem = (name) => {
    const newItem = { id: items.length + 1, name };
    setItems([...items, newItem]);
  };

  return (
    <div className="app-container">
      <Sidebar addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
};

export default App;

