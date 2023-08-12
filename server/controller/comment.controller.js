const { StatusCodes } = require("http-status-codes");
const Location = require("../models/location.model");
const Comment = require("../models/comment.model");

const postComment = async (req, res) => {
  const { comment, locationId } = req.body;
  const userId = req.user;

  console.log(comment);

  const commentCreated = await Comment.create({
    location: locationId,
    user: userId._id,
    content: comment,
  });

  const doc = await Location.findById(locationId);
  doc.comments.push(commentCreated._id);
  await doc.save();

  res.status(StatusCodes.OK).json(commentCreated);
};

const getComment = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const comment = await Comment.find({ location:  id  }).populate({
    path: "user",
    select: "userName",
  });
  
  if (!comment) {
    return res.status(StatusCodes.NO_CONTENT);
  }

  res.status(StatusCodes.OK).json(comment);
};

const LikeComment = async (req, res) => {
  const { id } = req.user;
};

const deleteComment = async (req, res) => {};

module.exports = { postComment, deleteComment, getComment };
