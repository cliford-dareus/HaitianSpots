import React, { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../Landing/landing.style";
import {
  ContentFilter,
  LocationContentList,
  LocationContentListBox,
  LocationContentListBtn,
  LocationContentListImage,
  LocationContentListInner,
  LocationContentListText,
  LocationContentListTextBox,
  LocationSection,
  LocationSectionContent,
  LocationSectionContentBox,
  LocationSectionContentFilter,
} from "./places.styles";

import PlaceFilter from "../../Components/PlacesFilter";

import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import {
  useFavoriteLocationMutation,
  useGetLocationsQuery,
} from "../../features/api/locationApi";
import { FavoriteListAction } from "../Favorites/favorite.styles";
import { useSelector } from "react-redux";

const index = ({ onItemSelected }) => {
  const { data, isLoading, isFetching } = useGetLocationsQuery();
  const [updateFavorite] = useFavoriteLocationMutation();
  const [filterData, setFilterData] = useState([]);

  const user = useSelector((state) => state.User);
  // const imageRef = useRef(null);

  const handledFavorite = async (id) => {
    if (!user) {
      toast("User not Login", { type: "error" });
      return;
    }
    await updateFavorite(id);
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
                    <LocationContentListInner
                      onClick={(e) => onItemSelected(e, { list, index })}
                    >
                      <LocationContentListImage>
                        <img src={`${list.image}`} alt="" />
                      </LocationContentListImage>

                      <LocationContentListTextBox>
                        <LocationContentListText>
                          <h4>{list.name}</h4>
                          <p>{list.address}</p>
                        </LocationContentListText>

                        <p>
                          <AiOutlineHeart />
                        </p>
                      </LocationContentListTextBox>
                    </LocationContentListInner>

                    <FavoriteListAction
                      onClick={() => handledFavorite(list._id)}
                    >
                      {!list.favorite ? <AiOutlineHeart /> : <AiTwotoneHeart />}
                    </FavoriteListAction>
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
