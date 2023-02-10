import React, { useEffect, useState } from "react";
import Carousel from "react-grid-carousel";
import "./Cast.css";

const Cast = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  console.log(allCharacters);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setAllCharacters(data.results));
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between cast-title">
        <p>Meet The Cast</p>

        <button type="button" className="btn view-btn text-white">
          View All
        </button>
      </div>

      <Carousel
        cols={5}
        rows={1}
        gap={11}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 4,
          },
          {
            breakpoint: 990,
            cols: 3,
          },
          {
            breakpoint: 776,
            cols: 2,
          },
        ]}
        mobileBreakpoint={556}
      >
        {allCharacters.map((characters) => (
          <Carousel.Item key={characters.id}>
            <div className="cast-card p-2">
              <img
                className="character-img w-100"
                src={characters.image}
                alt=""
              />
              <p className="text-white">{characters.name}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Cast;
