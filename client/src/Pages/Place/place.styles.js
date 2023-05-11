import styled from "styled-components";

export const PlaceContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 3em;
  display: flex;
  gap: 1em;
`;

export const PlaceContentContainer = styled.div`
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
  /* background-color: red; */
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

export const CommentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

export const CommentBox = styled.div`
  flex: 1;
  overflow-y: scroll;

  > div:not(:nth-of-type(1)) {
    margin-top: 1em;
  }
`;

export const Comment = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 1em;
  padding: 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-400);
`;

export const CommentImage = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: yellowgreen;
`;

export const CommentContent = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 0.3em;

  p {
    font-size: 0.9rem;
  }

  span {
    font-size: 0.7rem;
  }
`;

export const CommentActions = styled.div`
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
`;

export const PlaceUserContainer = styled.div`
  flex: 1;
  padding: 1em;
`;
