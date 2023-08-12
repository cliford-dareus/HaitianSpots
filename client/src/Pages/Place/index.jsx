import { useLocation } from "react-router-dom";
import {
  CommentContainer,
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
import InputField from "../../Components/UI/InputField";
import TransitionLayer from "../../Components/UI/TransitionLayer";
import CommentBox from "../../Components/Comment";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { usePostCommentMutation } from "../../features/api/commentApi";
import { AnimatePresence } from "framer-motion";

const variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

const index = ({ itemPosition }) => {
  const [imagePosition, setImagePosition] = useState({});
  const [postComment] = usePostCommentMutation();
  const [comments, setComments] = useState("");
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();
  const imageRef = useRef(null);

  const id = pathname.split(":")[1];
  const { data } = useGetLocationByIdQuery(id);

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const imageDimensions = imageRef?.current?.getBoundingClientRect();

    setImagePosition({
      width: imageDimensions.width,
      height: imageDimensions.height,
      top: imageDimensions.top,
      left: imageDimensions.left,
    });
  }, []);

  return (
    <PlaceContainer animate={show ? "show" : "hide"}>
      <PlaceContentContainer variants={variants}>
        <PlaceImageContainer>
          <PlaceActiveImage>
            <AnimatePresence>
              {itemPosition?.containerPosition &&
                itemPosition.imagePosition && (
                  <TransitionLayer
                    setShow={setShow}
                    itemPosition={itemPosition}
                    imageToPosition={imagePosition}
                    data={imageRef?.current?.currentSrc}
                  />
                )}
            </AnimatePresence>
            
            <img src={`${data?.image}`} ref={imageRef} alt="" />
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

          <CommentBox locationId={id} />
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
