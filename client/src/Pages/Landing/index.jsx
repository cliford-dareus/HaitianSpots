import React, { useState } from "react";
import {
  LandingBtn,
  LandingBtnContainer,
  LandingHeroImageContainer,
  LandingHeroContainer,
  LandingHeroText,
  LandingSection,
  LandingHeroImage,
  LandingHeroImg,
} from "./landing.style";
// import Map from "../../Components/Map";
// import Modal from "../../Components/LocationModal";
import Banner from "../../Components/UI/Banner";
import Slider from "../../Components/UI/Slider";
import NearYou from "../../Components/NearYou";
import { AiOutlineHeart, AiOutlinePlus, AiTwotoneHeart } from "react-icons/ai";
import {
  useFavoriteLocationMutation,
  useGetLocationsQuery,
} from "../../features/api/locationApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import Image from "../../../public/image.png";

const index = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading } = useGetLocationsQuery();
  const user = useSelector((state) => state.User);

  return (
    <LandingSection>
      <LandingHeroContainer>
        <LandingHeroText>
          Discover and share the most Beautiful Haitian places in your city
        </LandingHeroText>

        <LandingBtnContainer>
          <LandingBtn>Browse Places</LandingBtn>
          <LandingBtn>Add Place</LandingBtn>
        </LandingBtnContainer>

        <LandingHeroImageContainer>
          {data?.location.slice(0, 3).map((location) => (
            <LandingHeroImage>
              <LandingHeroImg src={location.image} />
            </LandingHeroImage>
          ))}
        </LandingHeroImageContainer>
      </LandingHeroContainer>

      {/* <Banner /> */}
      <Slider data={data} />
      <NearYou data={data} />
    </LandingSection>
  );
};

export default index;
