import styled from "styled-components";
import { motion } from "framer-motion";

export const BannerParallax = styled.div`
  overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;

  & div {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 64px;
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;

    & span {
      display: block;
      margin-right: 30px;
    }
  }
`;

export const BannerContainer = styled.div`
  height: 20vh;
  /* display: flex; */
  /* flex-direction: column; */
  margin-top: 3em;
  position: relative;
`;
