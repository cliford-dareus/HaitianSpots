import styled from "styled-components";

export const LandingSection = styled.section`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em;

  @media screen and (min-width: 700px) {
    grid-template-columns: 50% auto;
    height: calc(100% - 50px);
    grid-template-rows: auto;
    gap: 1em;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 40% auto;
  }
`;

export const LandingSectionLeft = styled.div`
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

export const LandingSectionTextContent = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const LandingSectionContent = styled.div`
  width: 100%;
  padding: 1em;
  margin-top: 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-400);
  overflow: hidden;
  height: 60%;
`;

export const LandingSectionCardContainer = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  max-width: 100%;
  overflow: hidden;

  @media screen and (min-width: 420px) {
  }

  @media screen and (min-width: 700px) {
    flex-direction: column;
  }
`;

export const LandingSectionCard = styled.div`
  position: relative;
  /* min-width: 240px; */
  min-width: 200px;
  width: 80%;
  /* max-width: 340px; */
  height: 155px; //155px
  border-radius: 0.5em;
  padding: 1em;
  background-color: var(--accent--color-200);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  @media screen and (min-width: 420px) {
  }

  @media screen and (min-width: 700px) {
    width: 100%;
    padding-top: 3em;
  }
`;

export const LandingSectionCardIcon = styled.span`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  font-size: 1.5em;
`;

export const LandingSectionLeftBtn = styled.button`
  display: none;
  @media screen and (min-width: 420px) {
  }

  @media screen and (min-width: 700px) {
    border: none;
    outline: none;
    padding: 0.8em;
    border-radius: 0.5em;
    background-color: var(--accent--color-200);
    color: var(--txt--color-100);
    font-weight: 800;
    font-size: 1rem;
    margin-top: 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
  }
`;

export const SectionTitle = styled.h1`
  font-size: 3rem;
  line-height: 1;

  span {
    color: var(--accent--color-200);
  }

  @media screen and (min-width: 375px) {
    font-size: 3.5rem;
  }
`;

export const LandingSectionRigth = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.5em;

  @media screen and (min-width: 700px) {
    padding-top: 3em;
  }
`;

export const MapContainer = styled.div`
  height: 100%;
  border-radius: 0.5em;
  overflow: hidden;
`;
