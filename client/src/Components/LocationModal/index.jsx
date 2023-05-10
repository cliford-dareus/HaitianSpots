import React, { useState } from "react";
import { LocationModal } from "./locationModal.styles";
import InputField from "../InputField";
import { useAddLocationMutation } from "../../features/api/locationApi";
import { toast } from "react-toastify";
import { getGeocoding } from "../../Utils/functions/getGeocoding";
import {
  InputFieldContainer,
  LabelField,
  SelectField,
} from "../InputField/inputField.styles";

const index = ({ setOpenModal }) => {
  const user = true;
  const [createLocation, { isLoading, error }] = useAddLocationMutation();
  const [locationInfo, setLocationInfo] = useState({
    name: "",
    speciality: "",
    address: "",
    number: "",
    image: "",
  });

  const handleInputs = (e) => {
    // console.log(e.target.files);
    setLocationInfo({ ...locationInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add toast validations
    if (!user) {
      toast("You must be login to add Location!", { type: "error" });
      return;
    }

    if (!locationInfo.name || !locationInfo.address) {
      toast("You must Enter a name or address!", { type: "error" });
      return;
    }

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
        <InputField
          fn={handleInputs}
          label="Restaurant Name"
          name="name"
          type="text"
          value={locationInfo.name}
        />

        <InputFieldContainer>
          <LabelField htmlFor="">Restaurant Speciality</LabelField>
          <SelectField
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
          </SelectField>
        </InputFieldContainer>

        <InputField
          fn={handleInputs}
          label="Address"
          name="address"
          type="text"
          value={locationInfo.address}
        />

        <InputField
          fn={handleInputs}
          label="Image Link"
          name="image"
          type="text"
          value={locationInfo.image}
        />

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
