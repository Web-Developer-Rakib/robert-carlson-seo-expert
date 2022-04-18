import React from "react";
import RakibImg from "../../Images/rakib.jpeg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-section mb-5">
      <div className="d-flex flex-column flex-lg-row align-items-center flex-wrap container w-100">
        <div className="w-50">
          <img src={RakibImg} alt="" className="rakib-img" />
        </div>
        <div className="w-50">
          <h1>About me</h1>
          <p>
            I am Rakibul Hassan. I have a big dream to become a successful
            programmer/web developer. I am working hard to reach my goal. I have
            sacrificed too many favorite things for my current goal. I was a
            project/marketing manager of a software development company. There
            was a big developer community. Since then, I fall in love with
            programming. And decided to learn programming. So, I quite my job
            and focus to learning. Now my dream is coming true.
            <br />
            <br />
            <b>"The goal of my life is, LEARNING, EARNING, INVESTMENT"</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
