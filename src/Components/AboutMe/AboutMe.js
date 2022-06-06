import React from "react";
import RakibImg from "../../Images/rakib.jpeg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="d-flex flex-column flex-lg-row align-items-center flex-wrap container w-100">
        <div className="w-50 d-flex justify-content-center justify-content-lg-between">
          <img src={RakibImg} alt="" className="rakib-img" />
        </div>
        <div className="about-txt">
          <h1>About Developer</h1>
          <p>
            Rakibul Hasan is solution-oriented and problem solver. Proven track
            record developing various web sites. Strong knowledge of MERN stack
            with re-usability and ease of maintenance. Highly proficient in
            JavaScript, as well as quality coding and excellent debugging
            skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
