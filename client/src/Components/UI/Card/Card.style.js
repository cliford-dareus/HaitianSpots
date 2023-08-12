import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  flex: 1 46%;
  height: 400px;
  max-width: 300px;
  min-width: 200px;
  border-radius: 0.5em;
  overflow: hidden;
  background-color: var(--bg--primary-500);
  cursor: pointer;

  @media screen and (min-width: 900px) {
    flex: 1 16%;
  }
`;

export const CardImageContainer = styled.div`
  height: 50%;
  position: relative;
`

export const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  object-fit: cover;
`;

export const CardFavoriteBtn = styled.div`
  position: absolute;
  top: .5em;
  right: .5em;
  z-index: 333;
  font-size: 1.5rem;
`;

export const CardBodyContainer = styled.div`
  padding: 1em;
`;

