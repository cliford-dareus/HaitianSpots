import React, { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../Landing/landing.style";
import {
  ContentFilter,
  LocationContentListBox,
  LocationSection,
  LocationSectionContent,
  LocationSectionContentBox,
  LocationSectionContentFilter,
} from "./places.styles";

import PlaceFilter from "../../Components/PlacesFilter";
import Card from "../../Components/UI/Card";

import { useGetLocationsQuery } from "../../features/api/locationApi";
import { useSelector } from "react-redux";

const index = ({ onItemSelected }) => {
  const { data, isLoading, isFetching } = useGetLocationsQuery();
  const [filterData, setFilterData] = useState([]);
  const user = useSelector((state) => state.User.user);

  useEffect(() => {
    setFilterData(data?.location);
  }, [data]);

  return (
    <LocationSection>
      <SectionTitle>
        Browse <br />
        All Places
      </SectionTitle>

      <LocationSectionContentBox>
        <PlaceFilter setFilterData={setFilterData} data={data} />

        <LocationSectionContent>
          <LocationSectionContentFilter>
            <ContentFilter>BreakFast</ContentFilter>
            <ContentFilter>Brunch</ContentFilter>
            <ContentFilter>Lunch</ContentFilter>
            <ContentFilter>Diner</ContentFilter>
          </LocationSectionContentFilter>

          <LocationContentListBox>
            {!isLoading
              ? filterData?.map((list, index) => (
                  <Card list={list} index={index} onItemSelected={onItemSelected} />
                ))
              : null}
          </LocationContentListBox>
        </LocationSectionContent>
      </LocationSectionContentBox>
    </LocationSection>
  );
};

export default index;
