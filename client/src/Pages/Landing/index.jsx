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
  const [updateFavorite] = useFavoriteLocationMutation();
  const { data, isLoading } = useGetLocationsQuery();
  const user = useSelector((state) => state.User);

  const handledFavorite = async (id) => {
    if (!user) {
      toast("User not Login", { type: "error" });
      return;
    }
    await updateFavorite(id);
  };

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
          <LandingHeroImage>
            <LandingHeroImg src={Image} />
          </LandingHeroImage>
          <LandingHeroImage>
            <LandingHeroImg src={Image} />
          </LandingHeroImage>
          <LandingHeroImage>
            <LandingHeroImg src={Image} />
          </LandingHeroImage>
        </LandingHeroImageContainer>
      </LandingHeroContainer>

      <Banner />
      <Slider />
      <NearYou />
    </LandingSection>
  );
};

export default index;
