import { motion } from "framer-motion";
import styled from "styled-components";

export const PlaceContainer = styled(motion.section)`
  width: 100%;
  height: 100%;
  padding-top: 3em;
  display: flex;
  gap: 1em;
  position: relative;
`;

export const PlaceContentContainer = styled(motion.div)`
  width: 65%;
  height: 90.5%;
  display: flex;
  flex-direction: column;
`;

export const PlaceImageContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  gap: 0.5em;
  border-radius: 0.5em;
  overflow: hidden;
`;

export const PlaceActiveImage = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  border-radius: 0.5em;
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PlaceImageGrid = styled.div`
  flex: 1;
  border-radius: 0.5em;
  background-color: var(--bg--primary-400);
`;

export const PlaceContentText = styled.div`
  padding: 1em;
  width: 100%;
  height: 50%;
  /* background-color: red; */
`;

export const CommentContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
`;

export const CommentInner = styled.div`
  height: 74%;
  /* padding: 1em; */
  border-radius: 0.5em;
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const PlaceUserContainer = styled.div`
  flex: 1;
  padding: 1em;
  border-radius: 0.5em;
  background-color: var(--accent--color-200);
  margin-bottom: 2em;
`;
