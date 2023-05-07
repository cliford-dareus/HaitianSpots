import React, { useEffect, useState } from "react";
// import getUserLocation from "../functions/getUserLocation";

const useUserLocation = () => {
  const [coords, setCoords] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const success = (pos) => {
    setIsLoading(true);
    const crd = pos.coords;

    if (crd.latitude) {
        setCoords({
            latitude: crd.latitude,
            longitude: crd.longitude,
        });

        setIsLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return { coords, isLoading };
};

export default useUserLocation;
