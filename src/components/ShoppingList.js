import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  console.log(items);
  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const itemsToDisplay = items?.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });
  const searchDisplayArray = itemsToDisplay?.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  console.log(searchDisplayArray);
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
        search={search}
      />
      <ul className="Items">
        {searchDisplayArray?.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
