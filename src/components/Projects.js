import React,{useEffect} from "react";
import "./projects.css";
import weather from '../assets/weather.png'
import todo from '../assets/todo.png'
import portfolio from '../assets/portfolio.png'

const Projects = () => {
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
    <div className="project_section" id="projects">
      <h1 className="project_title hidden">Projects</h1>
      <div className="card_div d-lg-flex">

        <div className="card hidden crd-bg">
          <img src={weather} className="card-img-top crd-icon" alt="Card image cap" />
          <div className="card-body ">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              Learnings: React and React Hooks, Creating React Components, Map API data dynamically,Axios GET Request, Semantic UI
              
            </p>
            <div className="">
              <a href="https://sanket137.github.io/Weather_App/" className="btn project_btn demo_btn ">
                Demo
              </a>
              <a href="https://github.com/Sanket137/Weather_App" className="btn project_btn btn-light">
                code
              </a>
            </div>
          </div>
        </div>

        <div className="card hidden crd-bg">
          <img src={todo} className="card-img-top crd-icon" alt="Card image cap" />
          <div className="card-body ">
            <h5 className="card-title">Todo list</h5>
            <p className="card-text">
            Learnings: React and React Hooks, useStates, useEffect Creating React Components, Create, Read, Update, Delete, Semantic UI, Toggle tasks
            </p>
            <div className="">
              <a href="https://sanket137.github.io/Todo_list/" className="btn project_btn demo_btn ">
                Demo
              </a>
              <a href="https://github.com/Sanket137/Todo_list" className="btn project_btn btn-light">
                code
              </a>
            </div>
          </div>
        </div>

        <div className="card hidden crd-bg">
          <img src={portfolio} className="card-img-top crd-icon port" alt="Card image cap" />
          <div className="card-body ">
            <h5 className="card-title">Dev portfolio</h5>
            <p className="card-text">
            Learnings: React and React Hooks, useState, useEffect, Creating React Components,Semantic UI, Personalised Dev-Portfolio.
            </p>
            
            <div className="">
              <a href="#" className="btn project_btn demo_btn ">
                Demo
              </a>
              <a href="#" className="btn project_btn btn-light">
                code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
