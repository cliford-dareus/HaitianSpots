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
import Home from "../../Components/Map/map";
import { AiOutlineHeart } from "react-icons/ai";

const index = () => {
  return (
    <LandingSection>
      <LandingSectionLeft>
        <LandingSectionTextContent>
          <SectionTitle>
            Discover <br /> <span>Haitian</span> Restaurant
          </SectionTitle>

          <LandingSectionLeftBtn>Add New Place</LandingSectionLeftBtn>
        </LandingSectionTextContent>

        <LandingSectionContent>
          <h2>Recently Added</h2>
          
          <LandingSectionCardContainer>
            <LandingSectionCard>
              <div>
                <h3>L'auberge Restaurant</h3>
                <p>
                  <span>star</span> 3.5
                </p>
              </div>

              <LandingSectionCardIcon>
                <AiOutlineHeart />
              </LandingSectionCardIcon>
            </LandingSectionCard>

            <LandingSectionCard>
              <div>
                <h3>L'auberge Restaurant</h3>
                <p>
                  <span>star</span> 3.5
                </p>
              </div>

              <LandingSectionCardIcon>
                <AiOutlineHeart />
              </LandingSectionCardIcon>
            </LandingSectionCard>

          </LandingSectionCardContainer>
        </LandingSectionContent>
      </LandingSectionLeft>

      <LandingSectionRigth>
        <Home />
      </LandingSectionRigth>
    </LandingSection>
  );
};

export default index;
