import React from "react";
import Banner from "../Banner/Banner";
import Cast from "../Cast/Cast";
import Episode from "../Episode/Episode";
import Location from "../Location/Location";

const Home = () => {
  return (
    <div className="banner-container">
      <Banner></Banner>
      <Cast></Cast>
      <Episode></Episode>
      <Location></Location>
    </div>
  );
};

export default Home;
