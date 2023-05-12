import React, { useRef, useState } from "react";
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
} from "./places.styles";
import { IoFilter } from "react-icons/io5";
import { useGetLocationsQuery } from "../../features/api/locationApi";

const index = ({ onItemSelected }) => {
  const { data, isLoading } = useGetLocationsQuery();
  const imageRef= useRef(null);

  return (
    <LocationSection>
      <SectionTitle>
        Browse <br />
        All Places
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
            {data?.location?.map((list, index) => (
              <LocationContentList key={list._id}>
                <LocationContentListImage>
                  <img src={`${list.image}`} alt="" />
                </LocationContentListImage>

                <LocationContentListTextBox>
                  <LocationContentListText>
                    <h3>{list.name}</h3>
                    <p>{list.address}</p>
                  </LocationContentListText>

                  <p>Rating</p>

                  <LocationContentListBtn
                    whileHover={{
                      backgroundColor: "var(--accent--color-200)",
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={(e) => onItemSelected(e,{ list, index })}
                  >
                    View Location
                  </LocationContentListBtn>
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
