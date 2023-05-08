import React, { useState } from "react";
import { LocationModal } from "./locationModal.styles";
import { useAddLocationMutation } from "../../features/api/locationApi";
import { toast } from "react-toastify";
import { getGeocoding } from "../../Utils/functions/getGeocoding";

const index = ({ setOpenModal }) => {
  const [createLocation, { isLoading, error }] = useAddLocationMutation();
  const [locationInfo, setLocationInfo] = useState({
    name: "",
    speciality: "",
    address: "",
    number: "",
    imageLink: "",
  });

  const handleInputs = (e) => {
    // console.log(e.target.files);
    setLocationInfo({ ...locationInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { address, ...rest } = locationInfo;

    try {
      const { features } = await getGeocoding(address);
      const geoCodedData = {
        ...rest,
        speciality: [locationInfo.speciality],
        address: features[0].place_name,
        longitude: features[0].center[0],
        latitude: features[0].center[1],
      };
      const payload = await createLocation(geoCodedData).unwrap();
      toast("New Place added", { type: "success" });
    } catch (error) {
      toast("bad request", { type: "error" });
    }
  };

  return (
    <LocationModal>
      <button onClick={() => setOpenModal(false)}>Close</button>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Restaurant Name</label>
          <input
            type="text"
            name="name"
            value={locationInfo.name}
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="">Restaurant Speciality</label>
          <select
            value={locationInfo.speciality}
            name="speciality"
            id=""
            onChange={handleInputs}
          >
            <option value="BreakFast, Brunch, Lunch, Diner">All</option>
            <option value="BreakFast, Brunch">BreakFast & Brunch</option>
            <option value="Lunch, Diner">Lunch & Diner</option>
            <option value="Brunch">Only Brunch</option>
            <option value="BreakFast">Only BreakFast</option>
            <option value="Lunch">Only Lunch</option>
            <option value="Diner">Only Diner</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            value={locationInfo.address}
            onChange={handleInputs}
          />
        </div>

        <div>
          <label htmlFor="">Image Link</label>
          <input
            type="text"
            name="imageLink"
            value={locationInfo.image}
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="">Choose an Image</label>
          <input type="file" onChange={handleInputs} />
        </div>
        <button>Submit</button>
      </form>
    </LocationModal>
  );
};

export default index;
