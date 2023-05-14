import styled from "styled-components";

export const FavoritesContainer = styled.section`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  display: grid;
  grid-template-columns: 60% auto;
  gap: 2em;
`;

export const FavoriteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
`;

export const FavoriteListContainer = styled.div`
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
  min-height: 60px;
  background-color: var(--bg--primary-800);
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  padding: 1em;
`;

export const FavoriteListAction = styled.div`
  position: absolute;
  top: 0;
  right: -3px;
  bottom: 0;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: .5em;
  background-color: var(--accent--color-200);
`;

export const FavoriteCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  overflow: hidden;
  background-color: var(--bg--primary-800);
`;

export const FavoriteCardImage = styled.div`
  position: relative;
  height: 50%;

  img{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FavoriteCardContent = styled.div`
    padding: 1em;
`;
