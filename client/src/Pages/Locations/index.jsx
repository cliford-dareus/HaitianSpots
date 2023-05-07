import React from "react";
import { SectionTitle } from "../Landing/landing.style";
import {
  ContentFilter,
  Filters,
  FiltersBox,
  LocationContentList,
  LocationContentListBox,
  LocationContentListBtn,
  LocationContentListImage,
  LocationContentListText,
  LocationContentListTextBox,
  LocationSection,
  LocationSectionContent,
  LocationSectionContentBox,
  LocationSectionContentFilter,
  LocationSectionFilter,
} from "./locations.styles";
import { IoFilter } from "react-icons/io5";

const index = () => {
  return (
    <LocationSection>
      <SectionTitle>
        Browse <br />
        All Locations
      </SectionTitle>

      <LocationSectionContentBox>
        <LocationSectionFilter>
          <FiltersBox>
            <Filters>1 mile</Filters>
            <Filters>5 miles</Filters>
            <Filters>10 miles</Filters>
            <Filters>20 miles</Filters>
            <Filters>25 miles</Filters>
          </FiltersBox>

          <span>
            <IoFilter />
          </span>
        </LocationSectionFilter>

        <LocationSectionContent>
          <LocationSectionContentFilter>
            <ContentFilter>BreakFast</ContentFilter>
            <ContentFilter>Brunch</ContentFilter>
            <ContentFilter>Lunch</ContentFilter>
            <ContentFilter>Diner</ContentFilter>
          </LocationSectionContentFilter>

          <LocationContentListBox>
            {[1, 2, 3, 4, 5, 6, 7].map((list) => (
              <LocationContentList>
                <LocationContentListImage></LocationContentListImage>

                <LocationContentListTextBox>
                  <LocationContentListText>
                    <h3>Hell's Kitchen</h3>
                    <p>Rating</p>
                  </LocationContentListText>

                  <p>17040 NE 21st Ave</p>

                  <LocationContentListBtn>View Location</LocationContentListBtn>
                </LocationContentListTextBox>
              </LocationContentList>
            ))}
          </LocationContentListBox>
        </LocationSectionContent>
      </LocationSectionContentBox>
    </LocationSection>
  );
};

export default index;
