import React, { useEffect } from "react";
import profile from "../assets/profile.png";
import "./mainpage.css";

const Mainpage = () => {
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
    <div>
      <section>
        <div className="d-grid d-lg-flex align-items-center">
          <div className="hidden ">
            <img className="profile" src={profile} alt="" />
          </div>
          <div className="hidden info">
            <h1 className="title">
              Hi i'm <span className="title_name">Sanket</span>{" "}
            </h1>
            <p className="title_job">Front End Developer</p>
            
            <a href="https://drive.google.com/file/d/1A2_6MuXyGAzhohaCJj4OeAY0j7I48-VC/view">
            <button className="btn btn-lg btn-light">Download CV</button>
            </a>
            
            <div className="logos hidden">
              <div className=" hidden">
                <a href="https://www.linkedin.com/in/sanket-shende-a8a82a1a0/">
                  <img
                    className="logo"
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="mx-4 hidden">
                <a href="https://github.com/Sanket137">
                  <img
                    className="logo"
                    src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
                    alt=""
                  />
                </a>
              </div>
              <div className=" hidden">
                <a href="">
                  <img
                    className="logo"
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
