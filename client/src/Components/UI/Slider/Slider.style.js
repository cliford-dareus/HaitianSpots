import styled from "styled-components";

export const LandingHighlightContainer = styled.div`
  margin-top: 4em;
  background-color: var(--color--dark-700);
  padding: 1em;
  border-radius: 5px;
`;

export const LandingHighlightSliderContainer = styled.div`
  width: 100%;
  height: 15em;
  /* overflow: hidden; */
  color: whitesmoke;
  padding: 1em;
`;

export const LandingHighlightSlide = styled.div`
  height: 13em;
  color: whitesmoke;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  & img {
    position: absolute;
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
  }
`;
