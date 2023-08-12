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
import Modal from "../../Components/LocationModal";
// import Banner from "../../Components/UI/Banner";
import Slider from "../../Components/UI/Slider";
import Footer from "../../Components/UI/Footer";
import NearYou from "../../Components/NearYou";
import { useGetLocationsQuery } from "../../features/api/locationApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import Image from "../../../public/image.png";

const index = () => {
  const { data } = useGetLocationsQuery();
  const [openModal, setOpenModal] = useState(false);
  const user = useSelector((state) => state.User);

  return (
    <LandingSection>
      <LandingHeroContainer>
        <LandingHeroText>
          Discover and share the most Beautiful Haitian places in your city
        </LandingHeroText>

        <LandingBtnContainer>
          <LandingBtn>Browse Places</LandingBtn>
          <LandingBtn onClick={() => setOpenModal(true)}>Add Place</LandingBtn>
        </LandingBtnContainer>

        <LandingHeroImageContainer>
          {data?.location.slice(0, 3).map((location) => (
            <LandingHeroImage>
              <LandingHeroImg src={location.image} />
            </LandingHeroImage>
          ))}
        </LandingHeroImageContainer>
      </LandingHeroContainer>

      {openModal && <Modal setOpenModal={setOpenModal} />}

      {/* <Banner /> */}
      <Slider data={data} />
      {data?.location && <NearYou data={data} />}
      <Footer />
    </LandingSection>
  );
};

export default index;
