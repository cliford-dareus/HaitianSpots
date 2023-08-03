import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 24px;
`;

export const HeaderSearch = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 1em;
  background-color: var(--bg--primary-500);
  border-radius: 0.5em;
  display: flex;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderSearchInput = styled.input`
  width: 90%;
  background-color: transparent;
  color: var(--txt--color-100);
  height: 100%;
  border: none;
  outline: none;
  margin-left: auto;
  font-size: 1rem;
`;

export const HeaderActions = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1em;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--txt--color-100);
    cursor: pointer;
  }
`;

export const HeaderProfile = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 1em;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--accent--color-200);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeaderPopup = styled.div`
  position: absolute;
  width: 200px;
  height: 150px;
  padding: 1em;
  border-radius: 0.5em;
  top: 3.5em;
  right: 0;
  z-index: 1000;
  background-color: var(--bg--primary-400);

  ul{
    list-style-type: none;
  }
`;
