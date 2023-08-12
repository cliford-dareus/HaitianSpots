import React from "react";
import { Marker, Popup } from "react-map-gl";
import Pin from "../../../assets/locationPin.svg";
import PopupContent from "../MapPopup";

const index = ({ data, showPopup, handlePopup, setShowPopup, setRoute }) => {
 
  return (
    <>
      {data.location?.map((location) => (
        <React.Fragment key={location._id}>
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            anchor="bottom"
            onClick={() => handlePopup(location)}
          >
            <img
              src={Pin}
              alt=""
              style={{ width: `${30}px`, height: `${30}px` }}
            />
            <p>{location.name}</p>
          </Marker>

          {showPopup[location._id] && (
            <Popup
              longitude={location.longitude}
              latitude={location.latitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              anchor="top"
              onClose={() => setShowPopup({})}
              style={{ padding: "" }}
            >
              <PopupContent location={location} setRoute={setRoute} />
            </Popup>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default index;
