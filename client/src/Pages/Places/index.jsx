import React, { useEffect, useRef, useState } from "react";
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
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import ActiveLinkIndicator from "../../Components/TabAnimation";
import { useGetLocationsQuery } from "../../features/api/locationApi";
import useUserLocation from "../../Utils/hooks/useUserLocation";
import { getDistance } from "../../Utils/functions/getDistance";
import { FavoriteListAction } from "../Favorites/favorite.styles";

const filtersData = ["all", 1, 5, 10, 20, 30];

const index = ({ onItemSelected }) => {
  const { data, isLoading } = useGetLocationsQuery();
  const [filterData, setFilterData] = useState([]);
  const [activeFilter, setActiveFilter] = useState(filtersData[0]);
  const { coords } = useUserLocation();
  const imageRef = useRef(null);

  const filterByDistance = (filter) => {
    if (!coords.latitude) {
      return;
    }
    const d = getDistance(coords, data, filter);
    setFilterData(d);
  };

  useEffect(() => {
    setFilterData(data?.location);
  }, []);

  return (
    <LocationSection>
      <SectionTitle>
        Browse <br />
        All Places
      </SectionTitle>

      <LocationSectionContentBox>
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
                {filter} {filter == "all" ? "" : "mile"}
              </Filters>
            ))}
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
            {filterData?.map((list, index) => (
              <LocationContentList
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 * index,
                  ease: "easeIn",
                }}
                key={list._id}
              >
                <LocationContentListImage>
                  <img src={`${list.image}`} alt="" />
                </LocationContentListImage>

                <LocationContentListTextBox>
                  <LocationContentListText>
                    <h3>{list.name}</h3>
                    <p>{list.address}</p>
                  </LocationContentListText>

                  <p>Rating</p>

                  <FavoriteListAction>
                    {!list.favorite ? <AiOutlineHeart /> : <AiTwotoneHeart />}
                  </FavoriteListAction>
                  <LocationContentListBtn
                    whileHover={{
                      backgroundColor: "var(--accent--color-200)",
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={(e) => onItemSelected(e, { list, index })}
                  >
                    View
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
