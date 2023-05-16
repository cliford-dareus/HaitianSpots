import styled from "styled-components";

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
