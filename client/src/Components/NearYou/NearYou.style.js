import styled from "styled-components";

export const LandingNearYouContainer = styled.div`
    margin-top: 3em;
    height: 90vh;
`;

export const LandingNearYouInner = styled.div`
    display: flex;
    width: 100%;
    height: calc(50vh + 100px + 1em);
    /* height: 400px; */
    margin-top: 1em;
    gap: 1em;
`;

export const LandingNearYouMapContainer = styled.div`
  background-color: grey;
  height: 50vh;
  width: 70%;
  border-radius: 5px;
`;

export const LandingNearYouPopularContainer = styled.div`
    margin-top: 1em;
    display: flex;
    gap: 1em;
`;

export const LandingNearYouPopular = styled.div`
    width: 25%;
    height: 100px;
    background-color: blueviolet;
    border-radius: 5px;
`;

export const LandingNearYouCard= styled.div`
    flex: 1;
    height: 100%;
    background-color: red;
    border-radius: 5px;
`;

