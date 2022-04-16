import React from "react";
import HeroImg from "../../Images/carlson.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-section container d-flex flex-wrap-reverse justify-content-center justify-content-lg-between align-items-center">
      <div className="hero-left">
        <h1 className="mt-lg-0 mt-5">
          Effective SEO expert{" "}
          <span className="name-color">Robert Carlson</span>
        </h1>
        <p>
          From this website, you will get exclusive SEO Services, Techniques,
          and Real Case Studies. If you like my resource, please do share this
          website with anyone interested in Digital Marketing and SEO.
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
    </section>
  );
};

export default Home;
