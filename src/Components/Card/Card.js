import React from "react";
import Img from "../../Images/caro-1.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img src={Img} alt="" />
      <h3>Backlink</h3>
      <h4>300$</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        dolores placeat nisi quae consequatur accusantium, laboriosam itaque.
        Expedita, ex deserunt culpa reiciendis dignissimos aut at aliquid fugit
        odio! Vitae, eos? Corrupti sit id illo consectetur odio minus
        accusantium accusamus. Cum quidem iusto dolorem assumenda asperiores est
        iure exercitationem vel ea.
      </p>
      <div className="d-flex justify-content-center">
        <button className="checkout-btn">CHECKOUT NOW</button>
      </div>
    </div>
  );
};

export default Card;
