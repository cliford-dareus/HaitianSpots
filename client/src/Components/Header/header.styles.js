import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSearch = styled.div`
  height: 35px;
  width: 35%;
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
  display: flex;
  align-items: center;
  gap: 1em;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--txt--color-100);
  }
`;

export const HeaderProfile = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 1em;
  background-color: var(--accent--color-200);
`;