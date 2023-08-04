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
import { LandingHeroImg } from "../../Pages/Landing/landing.style";

const index = ({ data }) => {
  return (
    <LandingNearYouContainer>
      <h2>Places Near you</h2>

      <LandingNearYouInner>
        <LandingNearYouMapContainer>
          <Map data={data} />

          <LandingNearYouPopularContainer>
            {/* Todo: add a popular flag in api */}
            {data?.location.slice(0, 4).map((location) => (
              <LandingNearYouPopular>
                <LandingHeroImg src={location.image} />
              </LandingNearYouPopular>
            ))}
          </LandingNearYouPopularContainer>
        </LandingNearYouMapContainer>

        <LandingNearYouCard></LandingNearYouCard>
      </LandingNearYouInner>
    </LandingNearYouContainer>
  );
};

export default index;
