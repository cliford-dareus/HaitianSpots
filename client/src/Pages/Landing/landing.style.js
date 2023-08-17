import styled from "styled-components";

export const LandingSection = styled.section`
  padding-inline: 24px;
  /* height: 200vh; */
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
`;

export const LandingHeroContainer = styled.div`
  max-width: 70%;
  height: 50vh;
  margin-inline: auto;
  padding: 1em;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3em;
  text-align: center;
`;

export const LandingHeroText = styled.h1`
  font-size: 4rem;
  line-height: 1;
  text-align: center;
  max-width: 20ch;
`;

export const LandingHeroImageContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  inset: 0;
  z-index: -2;
`;

export const LandingHeroImage = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: black;
  /* border: 1px solid wheat; */
  border-radius: 5px;
  position: relative;

  :nth-of-type(1),
  :nth-of-type(3) {
    margin-top: 1em;
  }

  :nth-of-type(2){
    margin-bottom: 1em;
  }
`;

export const LandingHeroImg = styled.img`
  position: absolute;
  inset: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: .6;
`;

export const LandingBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: center;
  margin-top: 1em;
`;

export const LandingBtn = styled.button`
  all: unset;
  padding: 0.5em 1em;
  background-color: blue;
  cursor: pointer;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
`;
export const LandingSectionCard = styled.div``;
export const LandingSectionCardContainer = styled.div``;
export const SectionTitle = styled.h1`
  font-size: 2rem;
  line-height: 1;
`;
export const LandingSectionLeft = styled.div``;
export const LandingSectionRigth = styled.div``;
