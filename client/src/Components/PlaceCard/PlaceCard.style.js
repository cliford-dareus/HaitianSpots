import styled from "styled-components";

export const PlaceCardContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  overflow: hidden;
  background-color: var(--bg--primary-800);
`;

export const PlaceCardImage = styled.div`
  position: relative;
  height: 50%;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PlaceCardContent = styled.div`
  padding: 1em;
`;