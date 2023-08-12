import React from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useFavoriteLocationMutation } from "../../../features/api/locationApi";
import {
  CardBodyContainer,
  CardContainer,
  CardFavoriteBtn,
  CardImage,
  CardImageContainer,
} from "./Card.style";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"

const index = ({ list, index, onItemSelected }) => {
  const user = useSelector((state) => state.User.isLoggedIn);
  const [updateFavorite] = useFavoriteLocationMutation();

  const handleFavorite = (id) => {
    if (!user) {
      toast("You must be logged in to favorited!", { type: "warning" });
      return
    }
    updateFavorite(id);
  };

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
    >
      <CardImageContainer>
        <CardImage src={list.image} />
        <CardFavoriteBtn onClick={() => handleFavorite(list._id)}>
          {!list.favorite ? <AiOutlineHeart /> : <AiTwotoneHeart />}
        </CardFavoriteBtn>
      </CardImageContainer>

      <CardBodyContainer onClick={(e) => onItemSelected(e, { list, index })}>
        <span>{list.rating}</span>
        <h3>{list.name}</h3>
        <p>{list.address}</p>
      </CardBodyContainer>
    </CardContainer>
  );
};

export default index;
