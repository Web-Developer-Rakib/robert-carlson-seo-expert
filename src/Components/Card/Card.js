import React from "react";
import "./Card.css";

const Card = ({ service }) => {
  const { id, image, name, price, description } = service;
  return (
    <div className="card" key={id}>
      <img src={image} alt="" />
      <h3 className="my-2">{name}</h3>
      <h4 className="price">{price}$</h4>
      <p>{description}</p>
      <div className="d-flex justify-content-center">
        <button className="checkout-btn">CHECKOUT NOW</button>
      </div>
    </div>
  );
};

export default Card;
