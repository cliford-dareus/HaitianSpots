const { StatusCodes } = require("http-status-codes");
const Location = require("../models/location.model");
const Comment = require("../models/comment.model");

const postComment = async (req, res) => {
  const { comment, locationId } = req.body;
  const userId = req.user;

  console.log(comment)

  const commentCreated = await Comment.create({
    location: locationId,
    user: userId._id,
    content: comment,
  });

  const doc = await Location.findById(locationId);
  doc.comments.push(commentCreated._id)
  await doc.save();

  res.status(StatusCodes.OK).json(commentCreated);
};

const LikeComment = async ( req, res ) => {
  const { id } = req.user;

}

const deleteComment = async (req, res) => {};

module.exports = { postComment, deleteComment };
