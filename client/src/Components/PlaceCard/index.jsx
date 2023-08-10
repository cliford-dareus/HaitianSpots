import React from 'react'
import { PlaceCardContainer, PlaceCardContent, PlaceCardImage } from './PlaceCard.style';

const index = ({ selectedList }) => {
  return (
    <PlaceCardContainer>
        <PlaceCardImage>
          <img src={`${selectedList?.image}`} alt="" />
        </PlaceCardImage>
        <PlaceCardContent>
          <span>{selectedList?.address?.split(",")[0]}</span>
          <h3>{selectedList?.name}</h3>
        </PlaceCardContent>
    </PlaceCardContainer>
  );
}

export default index