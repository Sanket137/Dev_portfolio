import React, { useEffect } from "react";
import "./skills.css";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  });
  return (
    <div className="skills_section" id="skills">
      <div>
        <h1 className="skills_title hidden">Skills</h1>
        <div className="row">
          <div className="col-sm-10 col-lg-4">
            <img
              className="html_icon hidden"
              src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
              alt=""
            />
            <img
              className="css_icon hidden "
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt=""
            />
          </div>

          <div className="col-sm-10 col-lg-4">
            <img
              className="react_icon hidden"
              src="https://cdn-icons-png.flaticon.com/512/1260/1260667.png"
              alt=""
            />
            <img
              className="js_icon hidden"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt=""
            />
          </div>

          <div className="col-sm-10 col-lg-4">
            <img
              className="bootstrap_icon hidden"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
              alt=""
            />
            <img
              className="github_icon hidden"
              src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Skills;
