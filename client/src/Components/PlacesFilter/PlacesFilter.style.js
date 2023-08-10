import styled from "styled-components";
import { motion } from "framer-motion";

export const LocationSectionFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }
`;

export const FiltersBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Filters = styled(motion.div)`
  position: relative;
  padding: 0.3em 1.5em;
  border-radius: 0.5em;
  font-size: 0.8rem;
  cursor: pointer;
  isolation: isolate;
  background-color: var(--bg--primary-800);
`;