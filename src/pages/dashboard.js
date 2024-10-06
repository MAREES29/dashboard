// Dashboard.js
import React from "react";
import Header from "../components/header";
import ProductList from "../components/items";
import { useProductContext } from "../context/productContext"; 
import { useNavigate } from "react-router";

export default function Dashboard() {

  const {
    categories,
    sortedProducts,
    handleSearch,
    handleFilter,
    handleSort,
  } = useProductContext();

  return (
    <>
      <Header
        categories={categories}
        onFilter={handleFilter}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <ProductList products={sortedProducts} />
    </>
  );
}
