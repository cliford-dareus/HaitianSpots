import { motion } from "framer-motion";
import styled from "styled-components";

export const LocationSection = styled.section`
  width: 100%;
  overflow: hidden;
  max-width: 1440px;
  margin-inline: auto;
  
  @media screen and (min-width: 764px) {
    padding-inline: 24px;
  }
`;

export const LocationSectionContentBox = styled.div`
  height: calc(100% - 112px);
  padding-top: 1em;
`;

export const LocationSectionContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
`;

export const LocationSectionContentFilter = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`;

export const ContentFilter = styled.div`
  padding-inline: 0.5em;
  height: 2em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 8.125em;
    height: 7.62em;
  }
`;

export const LocationContentListBox = styled.div`
  width: 100%;
  max-height: calc(100% - 6.75em); //2.75em
  padding: 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  @media screen and (min-width: 700px) {
    max-height: calc(100% - 2.75em);
  }
`;

