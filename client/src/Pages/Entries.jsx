import React, { useState, useEffect } from "react";
import { getLocations } from "../helper/FetchLocation";
import {
  LocationListContainer,
  LocationListItemContainer,
} from "../Utils/Styles/LocationList";

const Entry = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocation = async () => {
      const data = await getLocations();
      setLocations(data);
    };
    getLocation();
  });

  return (
    <LocationListContainer>
      {locations.map((location) => (
        <LocationListItemContainer>
          <h3>{location.title}</h3>
        </LocationListItemContainer>
      ))}
    </LocationListContainer>
  );
};

export default Entry;
