import React, { useState } from "react";
import {
  Filters,
  FiltersBox,
  LocationSectionFilter,
} from "./PlacesFilter.style";
import { ActiveLinkIndicator } from "../UI/SideBar/sidebar.styles";
import { getDistance } from "../../Utils/functions/getDistance";
import useUserLocation from "../../Utils/hooks/useUserLocation";

const filtersData = ["all", 1, 5, 10, 20];

const index = ({ setFilterData, data }) => {
  const [activeFilter, setActiveFilter] = useState(filtersData[0]);
  const { coords } = useUserLocation();

  const filterByDistance = (filter) => {
    if (!coords.latitude) {
      return;
    }
    const d = getDistance(coords, data, filter);
    setFilterData(d);
  };

  return (
    <LocationSectionFilter>
      <FiltersBox>
        {filtersData.map((filter) => (
          <Filters
            whileHover={{ backgroundColor: "var(--accent--color-200)" }}
            whileTap={{ scale: 0.9 }}
            key={filter}
            onClick={() => {
              filterByDistance(filter);
              setActiveFilter(filter);
            }}
          >
            {activeFilter === filter && (
              <ActiveLinkIndicator layoutId="bubble2" rounded="false" />
            )}
            {filter} {filter == "all" ? "" : "miles"}
          </Filters>
        ))}
      </FiltersBox>
    </LocationSectionFilter>
  );
};

export default index;
