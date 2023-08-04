import React, { useEffect, useState } from "react";
import {
  FavoriteCard,
  FavoriteCardContent,
  FavoriteCardImage,
  FavoriteContentBox,
  FavoriteList,
  FavoriteListAction,
  FavoriteListContainer,
  FavoriteListContainerActions,
  FavoritesContainer,
} from "./favorite.styles";
import {
  LandingSectionLeft,
  LandingSectionRigth,
  SectionTitle,
} from "../Landing/landing.style";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { Filters, FiltersBox } from "../Places/places.styles";
import {
  useFavoriteLocationMutation,
  useGetLocationsQuery,
} from "../../features/api/locationApi";
import ActiveLinkIndicator from "../../Components/UI/TabAnimation";
import { AnimatePresence } from "framer-motion";

const filter = [0, 1, 2, 3, 4, 5];

const index = () => {
  const [updateFavorite] = useFavoriteLocationMutation();
  const { data, isLoading, isSuccess } = useGetLocationsQuery();
  const [tabSelected, setTabSelected] = useState(filter[0]);
  const [favoriteList, setFavoriteList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const filterData = () => {
      return data?.location?.filter((x) => x.favorite === true);
    };
    setFavoriteList(filterData);
  }, [data]);

  useEffect(() => {
    if (!favoriteList) return;
    setSelectedList(favoriteList[0]);
  }, [favoriteList]);

  return (
    <FavoritesContainer>
      <LandingSectionLeft>
        <SectionTitle>
          Browse <br /> Your Favorites
        </SectionTitle>

        <FavoriteContentBox>
          <FiltersBox onClick={() => {}}>
            {filter.map((x, index) => (
              <Filters key={x}>
                {x}
                {tabSelected == index && (
                  <ActiveLinkIndicator layoutId="bubble2" rounded="false" />
                )}
              </Filters>
            ))}
          </FiltersBox>

          <AnimatePresence>
            <FavoriteListContainer>
              {!isLoading ? (
                favoriteList?.map((x) => (
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
                      {!x.favorite ? <AiOutlineHeart /> : <AiTwotoneHeart />}
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

      <LandingSectionRigth>
        {!isLoading && (
          <FavoriteCard>
            <FavoriteCardImage>
              <img src={`${selectedList?.image}`} alt="" />
            </FavoriteCardImage>
            <FavoriteCardContent>
              <span>{selectedList?.address?.split(",")[0]}</span>
              <h3>{selectedList?.name}</h3>
            </FavoriteCardContent>
          </FavoriteCard>
        )}
      </LandingSectionRigth>
    </FavoritesContainer>
  );
};

export default index;
