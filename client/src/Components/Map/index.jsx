import React, { useEffect, useState, useContext } from "react";
import Map, { Marker, Popup, Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import Loading from "../Components/Loading";

import {
  getLocations,
  geojsonData,
  startingLayer,
} from "../../helper/FetchLocation";

import UserPin from "../UserPin";
import LocationPin from "../LocationPin";
import { MapContainer } from "../../Pages/Landing/landing.style";
import useUserLocation from "../../Utils/hooks/useUserLocation";
import { useGetLocationsQuery } from "../../features/api/locationApi";
import { useSelector } from "react-redux";

const index = ({ isOpen }) => {
  const { coords, isLoading } = useUserLocation();
  const [isMapReady, setIsMapReady] = useState(false);
  const { data, isSuccess } = useGetLocationsQuery();

  const [locations, setLocations] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [geojson, setGeoJson] = useState({});
  const [route, setRoute] = useState({});
  const [routeLayer, setRouteLayer] = useState(geojsonData);
  const [startLayer, setStartLayer] = useState({ ...startingLayer });
  const [viewport, setViewport] = useState({
    width: `calc(100vw - ${!isOpen ? `150px` : `55px`}`,
    height: `calc(100vh - ${!isOpen ? `150px` : `55px`}`,
    longitude: null,
    latitude: null,
    zoom: 13,
  });

  const handlePopup = (location) => {
    setShowPopup({ [location._id]: true });
    // await getDirections(coords, coords);
    //     setStartLayer({
    //       ...startLayer,
    //       source: {
    //         data: {
    //           features: {
    //             geometry: { coordinates: [coords.longitude, coords.latitude] },
    //           },
    //         },
    //       },
    //     });
    setViewport({
      ...viewport,
      longitude: location.longitude,
      latitude: location.latitude,
    });
  };

  useEffect(() => {
    if (coords.latitude) {
      setViewport({
        ...viewport,
        longitude: coords.longitude,
        latitude: coords.latitude,
      });
      setIsMapReady(true);
    }
  }, [coords.latitude]);

  // useEffect(() => {
  //   if (route === null) return;
  //   const routeToLocation = async () => {
  //     const direction = await getDirections(coords, route);
  //     if(!direction)return;
  //     const directionRoutes = direction?.routes[0]?.geometry?.coordinates;
  //     setGeoJson({
  //       type: "Feature",
  //       properties: {},
  //       geometry: {
  //         type: "LineString",
  //         coordinates: directionRoutes,
  //       },
  //     });
  //   };
  //   routeToLocation();
  // }, [route]);

  // useEffect(() => {
  //   setRouteLayer(() => ({
  //     ...routeLayer,
  //     source: { type: "geojson", data: geojson },
  //   }));
  // }, [geojson]);

  // console.log(data);

  return (
    <MapContainer>
      <Map
        reuseMaps
        {...viewport}
        mapStyle="mapbox://styles/cliford-dareus/clhdu4uit028h01p49p287x74"
        mapboxAccessToken={import.meta.env.VITE_APP_MAPBOX_TOKEN}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {/* User Marker */}
        <UserPin coords={coords} />
        {/* Location Marker */}
        <LocationPin
          data={data}
          showPopup={showPopup}
          handlePopup={handlePopup}
          setShowPopup={setShowPopup}
          setRoute={setRoute}
        />
        {/* The Route Layer */}
        {/* <Source id="my-data" type="geojson" data={geojson}>
            {routeLayer.source.data !== null && <Layer {...routeLayer} />}
          </Source> */}
      </Map>
    </MapContainer>
  );
};

export default index;
