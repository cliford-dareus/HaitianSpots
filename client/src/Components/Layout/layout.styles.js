import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  /* position: relative; */
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 1em;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;

  @media screen and (min-width: 420px) {
    // paggind inline 1.5em for bigger size
    //change scroll
  }
  @media screen and (min-width: 700px) {
    overflow: hidden;
  }
  @media screen and (min-width: 1450px) {
    padding: 0 10vw;
  }
`;
