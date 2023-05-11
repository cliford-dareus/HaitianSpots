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
import { useGetLocationByIdQuery } from "../../features/api/locationApi";
import InputField from "../../Components/InputField";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { usePostCommentMutation } from "../../features/api/commentApi";

const index = () => {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const [postComment] = usePostCommentMutation();
  const { pathname } = useLocation();
  const id = pathname.split(":")[1];
  const { data, refetch } = useGetLocationByIdQuery(id);

  const handledComments = (e) => {
    setComments(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!comments) {
      toast("You can't comment blank");
      return;
    }
    try {
      await postComment({ locationId: id, comment: comments });
      setComments("");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data)

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
            <form action="" onSubmit={onSubmit}>
              <InputField
                fn={handledComments}
                label=""
                name="comment"
                type="text"
                value={comments}
              />
            </form>
          </div>

          <CommentBox>
            {data?.comments.map((comment) => (
              <Comment>
                <CommentImage></CommentImage>
                <CommentContent>
                  <h5>Cliford</h5>
                  <p>{comment.content}</p>
                  <span>Thu 22</span>
                </CommentContent>
                <CommentActions>
                  <span>
                    <AiOutlineHeart />
                  </span>
                  <span></span>
                </CommentActions>
              </Comment>
            ))}
          </CommentBox>
        </CommentInner>
        <PlaceUserContainer>
          <h3>Posted By</h3>
          <div>
            <p>{data?.creator.userName}</p>
            <button>Check more from this User</button>
          </div>
        </PlaceUserContainer>
      </CommentContainer>
    </PlaceContainer>
  );
};

export default index;
