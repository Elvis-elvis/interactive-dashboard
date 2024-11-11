import React from "react";

function FilterBar({ filter, setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <label>Filter by Season: </label>
      <select onChange={handleFilterChange} value={filter}>
        <option value="">All</option>
        <option value="été">Été</option>
        <option value="printemps">Printemps</option>
        <option value="automne">Automne</option>
        <option value="hiver">Hiver</option>
      </select>
    </div>
  );
}

export default FilterBar;
