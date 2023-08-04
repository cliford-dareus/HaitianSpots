import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LandingHighlightContainer, LandingHighlightSlide, LandingHighlightSliderContainer } from "./Slider.style";

import { sliderConfig } from "../../../Utils/styles/sliderConfig";
import { useFavoriteLocationMutation } from "../../../features/api/locationApi";

const index = ({ data }) => {
  const [updateFavorite] = useFavoriteLocationMutation();

   const handledFavorite = async (id) => {
     if (!user) {
       toast("User not Login", { type: "error" });
       return;
     }
     await updateFavorite(id);
   };

  return (
    <LandingHighlightContainer>
      <h2>Recently Added</h2>

      <LandingHighlightSliderContainer>
        <Slider {...sliderConfig}>

          {data?.location.slice(0, 6).map(location => (
            <LandingHighlightSlide> 
              <h3>{location.name}</h3>
              <img src={location.image} alt="" />
            </LandingHighlightSlide>
          )) }
        
        </Slider>
      </LandingHighlightSliderContainer>
    </LandingHighlightContainer>
  );
}

export default index