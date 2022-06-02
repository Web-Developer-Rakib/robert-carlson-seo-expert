import React from "react";
import UseFetch from "../../Hooks/UseFetch";
import HeroImg from "../../Images/carlson.jpg";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  const [services] = UseFetch();
  return (
    <div className="home-top" id="home">
      <section id="overview">
        <div className="mt-5 container d-flex flex-wrap-reverse justify-content-center justify-content-lg-between align-items-center">
          <div className="hero-left">
            <h1 className="mt-lg-0 mt-5">
              Effective SEO expert{" "}
              <span className="name-color">Robert Carlson</span>
            </h1>
            <p>
              From this website, you will get exclusive SEO Services,
              Techniques, and Real Case Studies. If you like my resource, please
              do share this website with anyone interested in Digital Marketing
              and SEO.
            </p>
          </div>
          <div className="">
            <img
              src={HeroImg}
              alt=""
              height={500}
              width={500}
              className="hero-img"
            />
          </div>
        </div>
      </section>
      <section id="services">
        <h2 className="text-center my-5">Services</h2>
        <div className="d-flex justify-content-center">
          <div className="mx-5 services">
            {services.map((service) => (
              <Card service={service}></Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
