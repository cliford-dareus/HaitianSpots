import React, { useState } from "react";
import {
  LandingNearYouActions,
  LandingNearYouContainer,
  LandingNearYouInner,
  LandingNearYouMapContainer,
  LandingNearYouPopular,
  LandingNearYouPopularContainer,
} from "./NearYou.style";
import Map from "../../Components/Map";
import PlaceCard from "../../Components/PlaceCard";
import { LandingHeroImg } from "../../Pages/Landing/landing.style";

const index = ({ data }) => {
  // calculate a closer location on mount
  const [selectedList, setSelectedPlace] = useState(data.location[0]);

  return (
    <LandingNearYouContainer>
      <h2>Places Near you</h2>

      <LandingNearYouInner>
        <LandingNearYouMapContainer>
          <Map data={data} setSelectedPlace={setSelectedPlace} />

          <LandingNearYouPopularContainer>
            {/* Todo: add a popular flag in api */}
            {data?.location.slice(0, 4).map((location) => (
              <LandingNearYouPopular onClick={() => setSelectedPlace(location)}>
                <LandingHeroImg src={location.image} />
              </LandingNearYouPopular>
            ))}
          </LandingNearYouPopularContainer>

          <LandingNearYouActions>fullscreen</LandingNearYouActions>
        </LandingNearYouMapContainer>

        <PlaceCard selectedList={selectedList} />
      </LandingNearYouInner>
    </LandingNearYouContainer>
  );
};

export default index;
