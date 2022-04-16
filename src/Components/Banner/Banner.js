import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import caroImg1 from "../../Images/caro-1.png";
import caroImg2 from "../../Images/caro-2.png";
import caroImg3 from "../../Images/caro-3.png";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 caro-hight"
            src={caroImg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Link Building</h3>
            <p>
              You are here, which means you are interested in ranking your
              website's pages for the relevant keywords on the first page of
              Google.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caro-hight"
            src={caroImg2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Guest Post</h3>
            <p>
              DA 94 | DR 91 | Traffic 19 Million | TF 75 | Domain Age 23 Year
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caro-hight"
            src={caroImg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Complete On Page SEO</h3>
            <p>High volume low difficulty keyword search.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
