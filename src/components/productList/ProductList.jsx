import React from "react";
import "./productList.css";
import { products } from '../../data/products';
import ProductItem from "../productItem/ProductItem";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list-wrapper container">
        <div className="product-list-head">
          <h1 className="section-title">Top Meals in Kolkata</h1>
          <form className="food-search-form">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="biriyani" />
            <button>Search</button>
          </form>
          <p className="section-subtitle">Search the food you want</p>
        </div>

        <div className="product-list-items">
            {products.map((product) => (
                <ProductItem product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
