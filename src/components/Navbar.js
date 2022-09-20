import React from "react";
import {Link} from 'react-scroll'

const Navbar = () => {



  


  return (
    <nav className="navbar fixed pt-3  navbar-expand-lg bg-transparent navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand " href="#">
          Sanket
        </a>
        <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
          <Link className="nav-link px-3" to="/" spy={true} smooth={true} offset={50} duration={500} aria-current="page" href="#">
              Home
            </Link>
            <Link className="nav-link navbar-links px-3" to="about" spy={true} smooth={true} offset={50} duration={500} aria-current="page" href="#">
              About
            </Link>
            <Link className="nav-link px-3" to="skills" spy={true} smooth={true} offset={50} duration={500} aria-current="page" href="#">
              Skills
            </Link>
            <Link className="nav-link px-3" to="projects" spy={true} smooth={true} offset={50} duration={500} aria-current="page" href="#">
              projects
            </Link>
            <Link className="nav-link px-3" to="contact" spy={true} smooth={true} offset={50} duration={500} aria-current="page" href="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
