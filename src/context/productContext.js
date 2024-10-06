import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { fetchAllProduct, fetchGetegory } from "../service/index";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  const fetchItems = async (navigate) => {
    const data = await fetchAllProduct(navigate);
    setItems(data);
    setFilteredProducts(data); // Initialize filtered products
  };

  const fetchAllCategories = async (navigate) => {
    const data = await fetchGetegory(navigate);
    setCategories(data);
  };

  useEffect(() => {
    fetchItems();
    fetchAllCategories();
  }, []);

  const handleSearch = useCallback((searchTerm) => {
    const filtered = items.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [items]);

  const handleFilter = useCallback((category) => {
    if (category) {
      const filtered = items.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(items);
    }
  }, [items]);

  const handleSort = useCallback((order) => {
    setSortOrder(order);
  }, []);

  const sortedProducts = useMemo(() => {
    if (!sortOrder) return filteredProducts;

    return [...filteredProducts].sort((a, b) => {
      if (sortOrder === "low-to-high") {
        return a.price - b.price; // Ascending order
      } else if (sortOrder === "high-to-low") {
        return b.price - a.price; // Descending order
      }
      return 0;
    });
  }, [filteredProducts, sortOrder]);

  return (
    <ProductContext.Provider value={{
      items,
      categories,
      filteredProducts,
      sortedProducts,
      handleSearch,
      handleFilter,
      handleSort,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return React.useContext(ProductContext);
};
