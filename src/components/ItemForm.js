import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [category, setCategory] = useState("Produce");
  const [itemName, setItemName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: category,
    };
    onItemFormSubmit(newItem);
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button>Add to List</button>
    </form>
  );
}

export default ItemForm;
