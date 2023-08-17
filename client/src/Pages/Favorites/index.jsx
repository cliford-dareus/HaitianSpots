import React, { useEffect, useState } from "react";
import {
  FavoriteContentBox,
  FavoriteList,
  FavoriteListAction,
  FavoriteListContainer,
  FavoriteListContainerActions,
  FavoriteSectionRigth,
  FavoritesContainer,
} from "./favorite.styles";
import { LandingSectionLeft, SectionTitle } from "../Landing/landing.style";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import {
  useFavoriteLocationMutation,
  useGetLocationsQuery,
} from "../../features/api/locationApi";
import PlaceCard from "../../Components/PlaceCard";
import PlaceFilter from "../../Components/PlacesFilter";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

const index = () => {
  const userId = useSelector((state) => state.User.user.user.data._id);
  const [updateFavorite] = useFavoriteLocationMutation();
  const { data, isLoading } = useGetLocationsQuery();
  const [favoriteList, setFavoriteList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const filterData = () => {
      return data?.location?.filter((x) => {
        return x.favorite.filter((f) => f == userId).length ? true : false;
      });
    };
    setFavoriteList(filterData);
  }, [data]);

  useEffect(() => {
    if (!favoriteList) return;
    setFilteredList(favoriteList);
    setSelectedList(favoriteList[0]);
  }, [favoriteList]);

  return (
    <FavoritesContainer>
      <LandingSectionLeft>
        <SectionTitle>
          Browse <br /> Your Favorites
        </SectionTitle>

        <FavoriteContentBox>
          <PlaceFilter
            setFilterData={setFilteredList}
            data={{ location: favoriteList }}
          />

          <AnimatePresence>
            <FavoriteListContainer>
              {!isLoading ? (
                filteredList?.map((x) => (
                  <FavoriteList
                    key={x}
                    onClick={() => setSelectedList(x)}
                    style={
                      selectedList?._id === x?._id
                        ? { border: "1px solid var(--accent--color-200)" }
                        : { border: "none" }
                    }
                  >
                    <h3>{x.name}</h3>
                    <FavoriteListAction onClick={() => updateFavorite(x._id)}>
                      <AiTwotoneHeart />
                    </FavoriteListAction>
                  </FavoriteList>
                ))
              ) : (
                <FavoriteList>
                  <FavoriteListAction></FavoriteListAction>
                </FavoriteList>
              )}
            </FavoriteListContainer>
          </AnimatePresence>
          <FavoriteListContainerActions>
            <button>Left</button>
            <button>Rigth</button>
          </FavoriteListContainerActions>
        </FavoriteContentBox>
      </LandingSectionLeft>

      <FavoriteSectionRigth>
        {/* Add palcehoplder when favorite is empy */}
        {!isLoading && <PlaceCard selectedList={selectedList} />}
      </FavoriteSectionRigth>
    </FavoritesContainer>
  );
};

export default index;
