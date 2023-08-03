import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LandingHighlightContainer, LandingHighlightSlide, LandingHighlightSliderContainer } from "./Slider.style";

import { sliderConfig } from "../../Utils/styles/sliderConfig";

const index = () => {
  return (
    <LandingHighlightContainer>
      <h2>Recently Added</h2>

      <LandingHighlightSliderContainer>
        <Slider {...sliderConfig}>
          <LandingHighlightSlide>
            <h1>1</h1>
          </LandingHighlightSlide>
          <LandingHighlightSlide>2</LandingHighlightSlide>
          <LandingHighlightSlide>3</LandingHighlightSlide>
          <LandingHighlightSlide>4</LandingHighlightSlide>
          <LandingHighlightSlide>5</LandingHighlightSlide>
          <LandingHighlightSlide>6</LandingHighlightSlide>
          <LandingHighlightSlide>7</LandingHighlightSlide>
        </Slider>
      </LandingHighlightSliderContainer>
    </LandingHighlightContainer>
  );
}

export default index