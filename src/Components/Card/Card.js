import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ service }) => {
  const { id, image, name, price, description } = service;
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="card" key={id}>
      <img src={image} alt="" />
      <h3 className="my-2">{name}</h3>
      <h4 className="price">{price}$</h4>
      <p>{description}</p>
      <div className="d-flex justify-content-center">
        <button className="checkout-btn" onClick={handleCheckout}>
          CHECKOUT NOW
        </button>
      </div>
    </div>
  );
};

export default Card;
