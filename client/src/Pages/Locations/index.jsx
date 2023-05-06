import React from "react";
import { SectionTitle } from "../Landing/landing.style";
import {
    Filters,
    FiltersBox,
  LocationSection,
  LocationSectionContent,
  LocationSectionContentBox,
  LocationSectionFilter,
} from "./locations.styles";
import { IoFilter } from 'react-icons/io5'

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
            <div></div>
            <div>
                
            </div>
        </LocationSectionContent>
      </LocationSectionContentBox>
    </LocationSection>
  );
};

export default index;
