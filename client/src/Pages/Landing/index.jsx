import React, { useState } from "react";
import {
  LandingSection,
  LandingSectionCard,
  LandingSectionCardContainer,
  LandingSectionCardIcon,
  LandingSectionContent,
  LandingSectionLeft,
  LandingSectionLeftBtn,
  LandingSectionRigth,
  LandingSectionTextContent,
  SectionTitle,
} from "./landing.style";
import Map from "../../Components/Map";
import Modal from "../../Components/LocationModal";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import {
  useFavoriteLocationMutation,
  useGetLocationsQuery,
} from "../../features/api/locationApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const index = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading } = useGetLocationsQuery();
  const [updateFavorite] = useFavoriteLocationMutation();
  const user = useSelector((state) => state.User)

  const handledFavorite = async (id) => {
    if (!user) {
      toast("User not Login", { type: "error" });
      return
    }
    await updateFavorite(id);
  };

  return (
    <LandingSection>
      <LandingSectionLeft>
        <LandingSectionTextContent>
          <SectionTitle>
            Discover <br />
            <span>Haitian</span> Restaurant
          </SectionTitle>
          <LandingSectionLeftBtn onClick={() => setOpenModal(!openModal)}>
            Add New Place
          </LandingSectionLeftBtn>
          {openModal && <Modal setOpenModal={setOpenModal} />}
        </LandingSectionTextContent>

        <LandingSectionContent>
          <h2>Recently Added</h2>
          <LandingSectionCardContainer>
            {!isLoading &&
              data?.location?.slice(0, 2).map((card) => (
                <LandingSectionCard
                  key={card._id}
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div>
                    <h3>{card.name}</h3>
                    <p>
                      <span>star</span> 3.5
                    </p>
                  </div>
                  <LandingSectionCardIcon
                    onClick={() => {
                      handledFavorite(card._id);
                    }}
                  >
                    {card.favorite ? <AiOutlineHeart /> : <AiTwotoneHeart />}
                  </LandingSectionCardIcon>
                </LandingSectionCard>
              ))}
          </LandingSectionCardContainer>
        </LandingSectionContent>
      </LandingSectionLeft>

      <LandingSectionRigth>
        <Map />
      </LandingSectionRigth>
    </LandingSection>
  );
};

export default index;
