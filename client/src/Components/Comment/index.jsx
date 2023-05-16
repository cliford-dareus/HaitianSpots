import React from "react";
import {
  Comment,
  CommentActions,
  CommentBox,
  CommentContent,
  CommentImage,
} from "./comment.styles";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const index = ({ data }) => {
  return (
    <CommentBox>
      {data?.comments.map((comment) => (
        <Comment key={comment._id}>
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
  );
};

export default index;
