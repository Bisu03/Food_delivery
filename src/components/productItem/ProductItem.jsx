import React from "react";
import "./productItem.css";

const ProductItem = ({ product }) => {
  const name = product?.info?.name;
  const productImg = product?.info?.image?.url;
  const rating = product?.info?.rating?.rating_text;
  const deliveryTime = product?.order?.deliveryTime;
  const price = product?.info?.cfo?.text.split(" ")[0];

  return (
    <div className="product-item">
      <div className="product-item-image">
        <img src={productImg} alt={name} />
      </div>
      <div className="product-item-info">
        <h5 className="product-item-info-name">{name}</h5>
        <div className="product-item-info-row">
          <div className="product-item-info-rating">
            <i class="fas fa-star"></i>
            <span>{rating}</span>
          </div>
          <p className="product-item-info-delivery-time">{deliveryTime}</p>
        </div>
        <p className="product-item-info-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
