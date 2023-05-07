import styled from "styled-components";

export const LocationSection = styled.section`
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 2em;
`;

export const LocationSectionContentBox = styled.div`
  /* background-color: red; */
  height: calc(100% - 112px);
  padding-top: 1em;
`;

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

export const Filters = styled.div`
  padding: 0.3em 1.5em;
  border-radius: 0.5em;
  font-size: 0.8rem;
  background-color: var(--bg--primary-800);
`;

export const LocationSectionContent = styled.div`
  height: 100%;
  display: flex;
  gap: 1em;
  margin-top: 1em;
`;

export const LocationSectionContentFilter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ContentFilter = styled.div`
  width: 8.125em;
  height: 7.62em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationContentListBox = styled.div`
  width: 100%;
  max-height: calc(100% - 2.75em);
  padding: 1em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-800);
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow-y: scroll;
`;

export const LocationContentList = styled.div`
  height: 100px;
  border-radius: 0.5em;
  background-color: var(--bg--primary-500);
  display: flex;
  gap: 1em;
  align-items: center;
`;

export const LocationContentListImage = styled.div`
  width: 150px;
  height: 100%;
  background-color: gray;
  border-radius: 0.5em;
`;

export const LocationContentListTextBox = styled.div`
  height: 100%;
  flex: 1;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LocationContentListText = styled.div``;

export const LocationContentListBtn = styled.button`
  border: none;
  outline: none;
  padding: 0.7em 2.5em;
  border-radius: 0.5em;
  background-color: var(--bg--primary-900);
`;
