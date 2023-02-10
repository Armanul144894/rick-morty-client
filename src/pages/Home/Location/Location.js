import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-grid-carousel";

const Location = () => {
  const [allLocation, setAllLocation] = useState([]);
  console.log(allLocation);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setAllLocation(data.results));
  }, []);
  return (
    <div className="container">
      <h1 className="text-white">Location</h1>

      <Carousel
        cols={5}
        containerStyle={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {allLocation.map((location) => (
          <Carousel.Item key={location.id}>
            <Card className="p-2 h-100 bg-dark">
              {/* <img src={location.image} alt="" /> */}
              <p className="text-white my-auto ">{location.name}</p>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Location;
