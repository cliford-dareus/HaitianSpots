import styled from "styled-components";

export const LandingNearYouContainer = styled.div`
  margin-top: 3em;
  height: 90vh;
`;

export const LandingNearYouInner = styled.div`
  display: flex;
  width: 100%;
  height: calc(50vh + 100px + 1em);
  margin-top: 1em;
  gap: 1em;
`;

export const LandingNearYouMapContainer = styled.div`
  background-color: grey;
  height: 50vh;
  min-width: 70%;
  border-radius: 5px;
  position: relative;
`;

export const LandingNearYouPopularContainer = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1em;
`;

export const LandingNearYouPopular = styled.div`
  position: relative;
  width: 25%;
  height: 100px;
  border-radius: 5px;
`;

export const LandingNearYouActions = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 222222;
  color: white;
`;
