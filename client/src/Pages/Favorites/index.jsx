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
import { useGetLocationsQuery } from "../../features/api/locationApi";

const filter = [1, 2, 3, 4, 5];

const index = () => {
  const { data, isLoading, isSuccess } = useGetLocationsQuery();
  const [tabSelected, setTabSelected] = useState(filter[0])
  const [favoriteList, setFavoriteList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  useEffect(() => {
    const filterData = () => {
      return data?.location?.filter((x) => x.favorite === true);
    };
    setFavoriteList(filterData);
  }, []);

  useEffect(() => {
    setSelectedList(favoriteList[0]);
  }, [favoriteList]);

  return (
    <FavoritesContainer>
      <LandingSectionLeft>
        <SectionTitle>
          Browse <br /> Your Favorites
        </SectionTitle>

        <FavoriteContentBox>
          <FiltersBox
            onClick={()=> {}}
          >
            {filter.map((x) => (
              <Filters key={x}>{x}</Filters>
            ))}
          </FiltersBox>

          <FavoriteListContainer>
            {!isLoading ? (
              favoriteList?.map((x) => (
                <FavoriteList
                  onClick={() => setSelectedList(x)}
                  style={
                    selectedList?._id === x?._id
                      ? { border: "1px solid var(--accent--color-200)" }
                      : { border: "none" }
                  }
                >
                  <h3>{x.name}</h3>
                  <FavoriteListAction>
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
