import styled from "styled-components";

export const LandingSection = styled.section`
  width: 100%;
  height: calc(100% - 50px);
  /* background-color: red; */
  display: grid;
  grid-template-columns: 35% auto;
  gap: 1em;
`;

export const LandingSectionLeft = styled.div`
  padding-top: 3em;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const LandingSectionTextContent = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const LandingSectionContent = styled.div`
  width: 100%;
  height: 60%;
  padding: 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
`;

export const LandingSectionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
`;

export const LandingSectionCard = styled.div`
  position: relative;
  width: 100%;
  height: 155px;
  border-radius: 0.5em;
  padding: 1em;
  background-color: var(--accent--color-200);
  display: flex;
  align-items: flex-end;
`;

export const LandingSectionCardIcon = styled.span`
    position: absolute;
    top: .5em;
    right: .5em;
    font-size: 1.5em;
`;

export const LandingSectionLeftBtn = styled.button`
  border: none;
  outline: none;
  padding: 0.8em;
  border-radius: 0.5em;
  background-color: var(--accent--color-200);
  color: var(--txt--color-100);
  font-weight: 800;
  font-size: 1.1rem;
  margin-top: 1em;
`;

export const SectionTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1;

  span {
    color: var(--accent--color-200);
  }
`;

export const LandingSectionRigth = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 3em;
  /* background-color: var(--bg--primary-800); */
  border-radius: 0.5em;
`;

export const MapContainer = styled.div`
  height: 100%;
  border-radius: 0.5em;
  overflow: hidden;
`;
