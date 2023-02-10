import React from "react";
import logo from "../../../assets/logo/Logo1.png";
import "./Banner.css";
import { FaRegPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner-container text-center">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img className="logo" src={logo} alt="" />
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
      <div className="container mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-8 d-flex flex-column-reverse flex-sm-column-reverse flex-md-row flex-lg-row gap-5 align-items-center header-content">
            <button className="watch-btn w-50 d-flex align-items-center justify-content-center gap-2">
              <FaRegPlayCircle></FaRegPlayCircle>Watch Now
            </button>
            <p className="header-text text-start">
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
