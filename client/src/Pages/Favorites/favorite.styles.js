import { motion } from "framer-motion";
import styled from "styled-components";

export const FavoritesContainer = styled.section`
  padding-inline: 24px;
  max-width: 1440px;
  margin-inline: auto;
  position: relative;
  width: 100%;
  /* height: calc(100% - 100px); */
  display: grid;
  grid-template-columns: 60% auto;
  gap: 2em;
  padding-inline: 24px;
`;

export const FavoriteSectionRigth = styled.div`
  padding: 4.5em 0;
`;

export const FavoriteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
`;

export const FavoriteListContainer = styled(motion.div)`
  position: relative;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const FavoriteListContainerActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const FavoriteList = styled.div`
  position: relative;
  width: 100%;
  /* min-height: 60px; */
  background-color: var(--bg--primary-800);
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  padding: 1em;
  cursor: pointer;
`;

export const FavoriteListAction = styled.div`
  position: absolute;
  top: 0;
  right: -3px;
  bottom: 0;
  z-index: 222;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: .5em;
  background-color: var(--accent--color-200);
`;