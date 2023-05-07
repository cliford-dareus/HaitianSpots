import React from "react";
import styled, { keyframes } from "styled-components";
// import { LoadingContainer } from "../Utils/Styles/HomePage";
import { ColorRing } from "react-loader-spinner";

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Loader = styled.div`
  position: fixed;
  z-index: 2;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${FadeOut};
  animation-duration: 0.5s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  pointer-events: none;
`;



const Loading = () => {
  return (
    <Loader>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      <h3>Loading Map...</h3>
    </Loader>
  );
};

export default Loading;
