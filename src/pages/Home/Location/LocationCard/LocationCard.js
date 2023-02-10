import React from "react";

const LocationCard = ({ location }) => {
  return (
    <div>
      <h1 className="text-white">{location.name}</h1>
    </div>
  );
};

export default LocationCard;
