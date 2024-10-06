import React, { useState, useEffect } from "react";
import Icon from "../util/styles/icon";
import { faMagnifyingGlass, faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal";

export default function Header({ categories, onFilter, onSearch, onSort }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSortModal, setShowSortModal] = useState(false); 

  // Debouncing search input to delay filtering when user is typing
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); 

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, onSearch]);

  // Show category filter modal
  const handleFilterClick = () => {
    setShowCategoryModal(true);
  };

  // Show sort options modal
  const handleSortClick = () => {
    setShowSortModal(true);
  };

  // Handle category selection inside modal
  const handleCategorySelect = (category) => {
    onFilter(category); 
    setShowCategoryModal(false);
  };

  // Handle sort option selection
  const handleSortOptionSelect = (order) => {
    onSort(order); 
    setShowSortModal(false); 
  };

  return (
    <div className="header">
      {/* Search Container */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
        />
        <button className="search-icon">
          <Icon icon={faMagnifyingGlass} />
        </button>
      </div>

      {/* Filter Button */}
      <button className="filter-icon" onClick={handleFilterClick}>
        <Icon icon={faFilter} />
      </button>

      {/* Sort Button */}
      <button className="sort-icon" onClick={handleSortClick}>
        <Icon icon={faSort} />
      </button>

      {/* Category Modal */}
      {showCategoryModal && (
        <Modal onClose={() => setShowCategoryModal(false)}>
          <h3>Select Category</h3>
          <ul className="category-list">
            {categories.map((category, index) => (
              <li key={index} onClick={() => handleCategorySelect(category)}>
                {category}
              </li>
            ))}
          </ul>
        </Modal>
      )}

      {/* Sort Modal */}
      {showSortModal && (
        <Modal onClose={() => setShowSortModal(false)}>
          <h3>Sort by Price</h3>
          <ul className="sort-list">
            <li onClick={() => handleSortOptionSelect("low-to-high")}>Low to High</li>
            <li onClick={() => handleSortOptionSelect("high-to-low")}>High to Low</li>
          </ul>
        </Modal>
      )}
    </div>
  );
}
