import React from "react";
import { NavLink } from "react-router-dom";
import img from "./img/home.png";
import About from "./About";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <div className="my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">
                Health Diary
            </h1>
            <p className="lead">
            Keep track of your health with us
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <NavLink to="/home">
              <button className="btn-lg btn-primary">Get started</button>
            </NavLink>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src={img} alt="home-img" width="750" />
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Hero;
