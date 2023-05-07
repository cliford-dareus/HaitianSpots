import React from 'react';
import Pin from "../../assets/locationPin.svg";
import Map, { Marker, Popup, Layer, Source } from "react-map-gl";

const index = ({ coords}) => {
  return (
    <>
        {coords.latitude && (
            <Marker
              longitude={coords.longitude}
              latitude={coords.latitude}
              anchor="bottom"
            >
              <img
                src={Pin}
                style={{ width: `${30}px`, height: `${30}px`, color: 'white' }}
                alt=""
              />
              <p>You're Here</p>
            </Marker>
          )}
    </>
  )
}

export default index