import React from "react";
import {
  LandingNearYouCard,
  LandingNearYouContainer,
  LandingNearYouInner,
  LandingNearYouMapContainer,
  LandingNearYouPopular,
  LandingNearYouPopularContainer,
} from "./NearYou.style";
import Map from "../../Components/Map";

const index = () => {
  return (
    <LandingNearYouContainer>
      <h2>Places Near you</h2>

      <LandingNearYouInner>
        <LandingNearYouMapContainer>
          <Map />

          <LandingNearYouPopularContainer>
            <LandingNearYouPopular></LandingNearYouPopular>
            <LandingNearYouPopular></LandingNearYouPopular>
            <LandingNearYouPopular></LandingNearYouPopular>
            <LandingNearYouPopular></LandingNearYouPopular>
          </LandingNearYouPopularContainer>
        </LandingNearYouMapContainer>

        <LandingNearYouCard>
            
        </LandingNearYouCard>
      </LandingNearYouInner>
    </LandingNearYouContainer>
  );
};

export default index;
