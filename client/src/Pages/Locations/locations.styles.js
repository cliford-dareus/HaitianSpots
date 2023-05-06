import styled from "styled-components";

export const LocationSection = styled.section`
  width: 100%;
  height: calc(100% - 50px);
  padding-top: 2em;
`;

export const LocationSectionContentBox = styled.div`
  /* background-color: red; */
  height: 100%;
  padding: 1em 0;
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

export const LocationSectionContent = styled.div``;
