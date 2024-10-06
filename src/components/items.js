import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = (props) => {
  const { products } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination logic
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = products.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <div className="product-grid">
        {currentItems ? (
          currentItems.map((product) => (
            <div onClick={()=>handleNavigate(product.id)} key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <p>
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </p>
              {product.description.length > 100 && (
                <button
                  className="show-more"
                >
                  Show more
                </button>
              )}
              <p>
                <strong>Category:</strong> {product.category}
              </p>
            </div>
          ))
        ) : (
          <div>No Items Found</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
