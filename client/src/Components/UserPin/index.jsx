import React from 'react';
import ypin from "../../assets/ypin.png";
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
                src={ypin}
                style={{ width: `${50}px`, height: `${50}px` }}
                alt=""
              />
              <p>You're Here</p>
            </Marker>
          )}
    </>
  )
}

export default index