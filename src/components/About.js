import React from "react";
import about_bg from "../assets/about_bg.png";
import "./about.css";

const About = () => {
  return (
    <>
    <h1 className="about_title">About me</h1>
    <div className="about_section" id="about">
      
      <div className="about_content d-lg-flex">
        <p className="intro">
          My name is Sanket Shende <br />
          <br />
          I am extremely proficient in Front-End Development using HTML5,
          Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js
          <br />
          <br />I am continuously engaging in trying to extend my skills with
          new technology.
        </p>
        <img className="about_bg" src={about_bg} alt="" />
      </div>
    </div>
    </>
  );
};

export default About;
