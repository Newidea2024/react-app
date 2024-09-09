import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <h3>{item.name}</h3>
      <button>Remove</button>
      <button>Edit</button>
    </div>
  );
};

export default ItemCard;
