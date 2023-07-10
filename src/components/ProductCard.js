import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="product-card" onClick={goToDetail}>
      <img className="product-img" width={220} src={item?.img} />
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
      <div>{item?.choice == true ? "conscious choice" : ""}</div>
    </div>
  );
};

export default ProductCard;
