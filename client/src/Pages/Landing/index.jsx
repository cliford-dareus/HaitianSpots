import React from "react";
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
import Map from "../../Components/Map/map";
import { AiOutlineHeart } from "react-icons/ai";
import { useGetLocationsQuery } from "../../features/api/locationApi";

const index = () => {
  const { data, isLoading } = useGetLocationsQuery();

  return (
    <LandingSection>
      <LandingSectionLeft>
        <LandingSectionTextContent>
          <SectionTitle>
            Discover <br />
            <span>Haitian</span> Restaurant
          </SectionTitle>
          <LandingSectionLeftBtn>Add New Place</LandingSectionLeftBtn>
        </LandingSectionTextContent>

        <LandingSectionContent>
          <h2>Recently Added</h2>
          <LandingSectionCardContainer>
            {!isLoading &&
              data.location.slice(0, 2).map((card) => (
                <LandingSectionCard key={card._id}>
                  <div>
                    <h3>{card.title}</h3>
                    <p>
                      <span>star</span> 3.5
                    </p>
                  </div>
                  <LandingSectionCardIcon>
                    <AiOutlineHeart />
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
