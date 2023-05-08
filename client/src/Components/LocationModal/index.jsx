import React, { useState } from "react";
import { LocationModal } from "./locationModal.styles";
import { useAddLocationMutation } from "../../features/api/locationApi";
import { toast } from "react-toastify";

const index = ({ setOpenModal }) => {
  const [createLocation] = useAddLocationMutation();
  const [locationInfo, setLocationInfo] = useState({
    name: "",
    speciality: "",
    address: "",
    number: "",
    imageLink: "",
  });

  const handleInputs = (e) => {
    console.log(e.target.files);
    setLocationInfo({ ...locationInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = await createLocation(locationInfo).unwrap();
    } catch (error) {
      toast("bad request", {type: 'error'});
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
            <option value="">BreakFast & Brunch</option>
            <option value="">Lunch & Diner</option>
            <option value="">Only Brunch</option>
            <option value="">Only BreakFast</option>
            <option value="">Only Lunch</option>
            <option value="">Only Diner</option>
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
