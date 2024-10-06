import React from "react";

const ProductDetail = ({ product }) => {
  if (!product) return null;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="product-rating">
          <span className="rating-text">Rating: {product.rating.rate} </span>
          <span className="rating-count">({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
