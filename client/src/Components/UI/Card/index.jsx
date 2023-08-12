import React from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useFavoriteLocationMutation } from "../../../features/api/locationApi";
import { CardBodyContainer, CardContainer, CardFavoriteBtn, CardImage, CardImageContainer } from "./Card.style";

const index = ({ list, index, onItemSelected }) => {
  const [updateFavorite] = useFavoriteLocationMutation();

  return (
    <CardContainer
      initial={{ opacity: 0, y: -2 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.2 * index,
        ease: "easeIn",
      }}
      key={list._id}
      onClick={(e) => onItemSelected(e, { list, index })}
    >
      <CardImageContainer>
        <CardImage src={list.image} />
        <CardFavoriteBtn onClick={() => updateFavorite(list._id)}>
          {!list.favorite ? <AiOutlineHeart /> : <AiTwotoneHeart />}
        </CardFavoriteBtn>
      </CardImageContainer>

      <CardBodyContainer>
        <span>{list.rating}</span>
        <h3>{list.name}</h3>
        <p>{list.address}</p>
      </CardBodyContainer>
    </CardContainer>
  );
};

export default index;
