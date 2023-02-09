import React from "react";
import logo from "../../../assets/logo/Logo1.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="header-title">
              The{" "}
              <span>
                Rick & <br /> Morty
              </span>{" "}
              Wiki
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 d-flex gap-4 header-content">
            <button className="watch-btn text-white">Watch Now</button>
            <p className="text-white text-start">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
