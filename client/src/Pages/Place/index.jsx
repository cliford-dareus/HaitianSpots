import { useLocation } from "react-router-dom";
import {
  Comment,
  CommentActions,
  CommentBox,
  CommentContainer,
  CommentContent,
  CommentImage,
  CommentInner,
  PlaceActiveImage,
  PlaceContainer,
  PlaceContentContainer,
  PlaceContentText,
  PlaceImageContainer,
  PlaceImageGrid,
  PlaceUserContainer,
} from "./place.styles";
import Map from "../../Components/Map";
import { useGetLocationByIdQuery } from "../../features/api/locationApi";
import InputField from "../../Components/InputField";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const index = () => {
  const { pathname } = useLocation();
  const id = pathname.split(":")[1];
  const { data } = useGetLocationByIdQuery(id);

  // console.log(id)

  return (
    <PlaceContainer>
      <PlaceContentContainer>
        <PlaceImageContainer>
          <PlaceActiveImage>
            <img src={`${data?.image}`} alt="" />
          </PlaceActiveImage>
          {/* Grid for more image */}
          <PlaceImageGrid></PlaceImageGrid>
        </PlaceImageContainer>
        <PlaceContentText>
          <h1>{data?.name}</h1>
        </PlaceContentText>
      </PlaceContentContainer>

      <CommentContainer>
        <CommentInner>
          <div>
            <h3>Comments</h3>
            <InputField fn={() => {}} label="" name="" type="text" value="" />
          </div>

          <CommentBox>

            <Comment>
              <CommentImage></CommentImage>
              <CommentContent>
                <h5>Cliford</h5>
                <p>Lorem ipsum dolor </p>
                <span>Thu 22</span>
              </CommentContent>
              <CommentActions>
                <span>
                  <AiOutlineHeart />
                </span>
                <span></span>
              </CommentActions>
            </Comment>
            
          </CommentBox>
        </CommentInner>
        <PlaceUserContainer>
          <h3>user</h3>
        </PlaceUserContainer>
      </CommentContainer>
    </PlaceContainer>
  );
};

export default index;
