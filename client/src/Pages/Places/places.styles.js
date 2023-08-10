import { motion } from "framer-motion";
import styled from "styled-components";

export const LocationSection = styled.section`
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 3em;
  padding-inline: 24px;
  overflow: hidden;
`;

export const LocationSectionContentBox = styled.div`
  height: calc(100% - 112px);
  padding-top: 1em;
`;

export const LocationSectionContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;

  /*  */
  @media screen and (min-width: 560px) {
    flex-direction: row;
  }
`;

export const LocationSectionContentFilter = styled.div`
  display: flex;
  gap: 1em;
  /* flex-direction: column; */

  /*  */
  @media screen and (min-width: 560px) {
    flex-direction: column;
  }
`;

export const ContentFilter = styled.div`
  /* width: 3em; */
  padding-inline: 0.5em;
  height: 2em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    width: 8.125em;
    height: 7.62em;
  }
`;

export const LocationContentListBox = styled.div`
  width: 100%;
  max-height: calc(100% - 6.75em); //2.75em
  padding: 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  overflow-y: scroll;

  @media screen and (min-width: 700px) {
    max-height: calc(100% - 2.75em);
  }
`;

export const LocationContentList = styled(motion.div)`
  position: relative;
  height: 200px;
  width: 30%;
  min-height: 100px; //300px
  border-radius: 0.5em;
  background-color: var(--bg--primary-500);
  cursor: pointer;

  @media screen and (min-width: 700px) {
    /* height: 300px; */
  }
`;

export const LocationContentListInner = styled.div`
  position: absolute;
  width: 90%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
`;

export const LocationContentListImage = styled.div`
  min-width: 50px;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: gray;
  border-radius: 0.5em;

  @media screen and (min-width: 700px){
    width: 200px;
    
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LocationContentListTextBox = styled.div`
  height: 100%;
  flex: 1;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  /* align-items: center; */
  /* padding-right: 9em; */
`;

export const LocationContentListText = styled.div`
  width: 15ch;

  @media screen and (min-width: 700px){
   width: 30ch;
  }

  @media screen and (min-width: 1025px){
   width: 40ch;
  }

  p {
    display: none;

    @media screen and (min-width: 700px) {
      display: block;
    }
  }
`;

export const LocationContentListBtn = styled(motion.div)`
  border: none;
  outline: none;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-900);
  border: 1px solid var(--accent--color-200);
  color: whitesmoke;
  font-size: 0.9rem;
  text-decoration: none;
`;
