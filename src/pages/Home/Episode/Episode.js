import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-grid-carousel";

const Episode = () => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  console.log(allEpisodes);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setAllEpisodes(data.results));
  }, []);
  return (
    <div className="mt-5 container">
      <h1 className="text-white">Episodes</h1>

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
        //   arrowRight={<ArrowBtn type="right" />}
        //   arrowLeft={<ArrowBtn type="left" />}
      >
        {allEpisodes.map((episodes) => (
          <Carousel.Item key={episodes.id}>
            <Card className="h-100 p-2">
              <p>{episodes.episode}</p>
              <h4>{episodes.name}</h4>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Episode;
