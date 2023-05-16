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
import {
  useFavoriteLocationMutation,
  useGetLocationsQuery,
} from "../../features/api/locationApi";
import useUserLocation from "../../Utils/hooks/useUserLocation";
import { getDistance } from "../../Utils/functions/getDistance";
import { FavoriteListAction } from "../Favorites/favorite.styles";
import { useSelector } from "react-redux";

const filtersData = ["all", 1, 5, 10, 20, 30];

const index = ({ onItemSelected }) => {
  const { data, isLoading, isFetching } = useGetLocationsQuery();
  const [updateFavorite] = useFavoriteLocationMutation();
  const [filterData, setFilterData] = useState([]);
  const [activeFilter, setActiveFilter] = useState(filtersData[0]);
  const { coords } = useUserLocation();
  const user = useSelector((state) => state.User);
  const imageRef = useRef(null);

  const handledFavorite = async (id) => {
    if (!user) {
      toast("User not Login", { type: "error" });
      return;
    }
    await updateFavorite(id);
  };

  const filterByDistance = (filter) => {
    if (!coords.latitude) {
      return;
    }
    const d = getDistance(coords, data, filter);
    setFilterData(d);
  };

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
            {!isLoading
              ? filterData?.map((list, index) => (
                  <LocationContentList
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 * index,
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

                      <FavoriteListAction
                        onClick={() => handledFavorite(list._id)}
                      >
                        {!list.favorite ? (
                          <AiOutlineHeart />
                        ) : (
                          <AiTwotoneHeart />
                        )}
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
                ))
              : null}
          </LocationContentListBox>
        </LocationSectionContent>
      </LocationSectionContentBox>
    </LocationSection>
  );
};

export default index;
