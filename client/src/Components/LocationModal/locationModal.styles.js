import styled from "styled-components";

export const LocationModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 2em 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
  z-index: 9999;

  @media screen and (min-width: 564px){
    width: 50%;
  }
`;

export const CloseButton = styled.button`
  all: unset;
  cursor: pointer;
`;
