import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

export const PageForm = styled.form`
  width: 100%;
  //   border: 1px solid white;
  padding: 1em 0.5em;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h2``;

export const AuthButton = styled.button`
  padding: 0.7em 1em;
  border-radius: 0.5em;
  font-weight: bold;
  background: blue;
  color: white;
  outline: none;
  border: none;
`;
